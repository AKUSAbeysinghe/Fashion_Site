<?php
// Start output buffering to capture any unexpected output
ob_start();
// Clear any existing output
ob_clean();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Wildcard for debugging; adjust to http://localhost:3000 or specific port
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Configure error logging
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/debug_delete_lookbook.log');

try {
    // Log request start
    error_log(date('[Y-m-d H:i:s] ') . "Delete request received: " . json_encode($_POST));

    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "react_admin_db";

    // Connect to database
    $conn = new mysqli($host, $user, $pass, $db);
    if ($conn->connect_error) {
        error_log(date('[Y-m-d H:i:s] ') . "DB Connection failed: " . $conn->connect_error);
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'DB Connection failed']);
        ob_end_flush();
        exit;
    }

    // Validate ID
    $id = isset($_POST['id']) ? (int)$_POST['id'] : 0;
    if ($id <= 0) {
        error_log(date('[Y-m-d H:i:s] ') . "Invalid ID received: " . ($_POST['id'] ?? 'none'));
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Valid ID required']);
        ob_end_flush();
        exit;
    }
    error_log(date('[Y-m-d H:i:s] ') . "Processing delete for ID: $id");

    // Check if lookbooks table exists
    $result = $conn->query("SHOW TABLES LIKE 'lookbooks'");
    if ($result->num_rows === 0) {
        error_log(date('[Y-m-d H:i:s] ') . "Table 'lookbooks' does not exist");
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Table lookbooks does not exist']);
        ob_end_flush();
        exit;
    }

    // Check if the lookbook entry exists
    $sql = "SELECT image_url FROM lookbooks WHERE id = ?";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        error_log(date('[Y-m-d H:i:s] ') . "Prepare failed for SELECT: " . $conn->error);
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Database error: ' . $conn->error]);
        ob_end_flush();
        exit;
    }
    $stmt->bind_param("i", $id);
    if (!$stmt->execute()) {
        error_log(date('[Y-m-d H:i:s] ') . "SELECT query failed: " . $stmt->error);
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Database error: ' . $stmt->error]);
        ob_end_flush();
        exit;
    }
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    $stmt->close();

    // Log whether entry was found
    if (!$row) {
        error_log(date('[Y-m-d H:i:s] ') . "No lookbook found for ID: $id");
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'Lookbook not found']);
        ob_end_flush();
        exit;
    }
    error_log(date('[Y-m-d H:i:s] ') . "Lookbook found for ID: $id, image_url: " . ($row['image_url'] ?? 'none'));

    // Attempt to delete image if it exists
    if (!empty($row['image_url']) && file_exists($row['image_url'])) {
        if (!unlink($row['image_url'])) {
            error_log(date('[Y-m-d H:i:s] ') . "Failed to delete image: " . $row['image_url']);
            // Continue even if image deletion fails
        } else {
            error_log(date('[Y-m-d H:i:s] ') . "Image deleted: " . $row['image_url']);
        }
    } else {
        error_log(date('[Y-m-d H:i:s] ') . "No image to delete or file does not exist: " . ($row['image_url'] ?? 'none'));
    }

    // Delete lookbook entry
    $sql = "DELETE FROM lookbooks WHERE id = ?";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        error_log(date('[Y-m-d H:i:s] ') . "Prepare failed for DELETE: " . $conn->error);
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Database error: ' . $conn->error]);
        ob_end_flush();
        exit;
    }
    $stmt->bind_param("i", $id);
    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            error_log(date('[Y-m-d H:i:s] ') . "Lookbook deleted successfully for ID: $id");
            http_response_code(200);
            echo json_encode(['success' => true, 'message' => 'Lookbook deleted successfully']);
        } else {
            error_log(date('[Y-m-d H:i:s] ') . "No rows affected for ID: $id");
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Lookbook not found']);
        }
    } else {
        error_log(date('[Y-m-d H:i:s] ') . "DELETE query failed: " . $stmt->error);
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Delete failed: ' . $stmt->error]);
    }

    $stmt->close();
    $conn->close();
} catch (Exception $e) {
    error_log(date('[Y-m-d H:i:s] ') . "Exception: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server error: ' . $e->getMessage()]);
}

// Ensure no stray output
ob_end_flush();
?>