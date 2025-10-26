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
ini_set('error_log', __DIR__ . '/debug_update_lookbook.log');

try {
    // Log request start
    error_log(date('[Y-m-d H:i:s] ') . "Update request received: " . json_encode($_POST) . ", Files: " . json_encode($_FILES));

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

    // Validate inputs
    $id = isset($_POST['id']) ? (int)$_POST['id'] : 0;
    $collection = $_POST['collection'] ?? '';
    $gender = $_POST['gender'] ?? '';
    $image = $_FILES['image'] ?? null;

    if ($id <= 0 || !$collection || !$gender) {
        error_log(date('[Y-m-d H:i:s] ') . "Invalid input: ID=$id, Collection=$collection, Gender=$gender");
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'ID, collection, and gender are required']);
        ob_end_flush();
        exit;
    }
    error_log(date('[Y-m-d H:i:s] ') . "Processing update for ID: $id");

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

    if (!$row) {
        error_log(date('[Y-m-d H:i:s] ') . "No lookbook found for ID: $id");
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'Lookbook not found']);
        ob_end_flush();
        exit;
    }
    error_log(date('[Y-m-d H:i:s] ') . "Lookbook found for ID: $id, image_url: " . ($row['image_url'] ?? 'none'));

    $targetFile = null;
    if ($image && $image['size'] > 0 && $image['error'] === UPLOAD_ERR_OK) {
        $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!in_array($image['type'], $allowedTypes)) {
            error_log(date('[Y-m-d H:i:s] ') . "Invalid image type: " . $image['type']);
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Invalid image type. Only JPEG, PNG, or GIF allowed']);
            ob_end_flush();
            exit;
        }

        $targetDir = "Uploads/lookbooks/";
        if (!is_dir($targetDir)) {
            mkdir($targetDir, 0777, true);
            error_log(date('[Y-m-d H:i:s] ') . "Created directory: $targetDir");
        }
        $imageName = time() . "_" . basename($image['name']);
        $targetFile = $targetDir . $imageName;

        if (!move_uploaded_file($image['tmp_name'], $targetFile)) {
            error_log(date('[Y-m-d H:i:s] ') . "Failed to upload image: " . $image['name']);
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to upload image']);
            ob_end_flush();
            exit;
        }
        error_log(date('[Y-m-d H:i:s] ') . "Image uploaded: $targetFile");

        // Delete old image if it exists
        if (!empty($row['image_url']) && file_exists($row['image_url'])) {
            if (!unlink($row['image_url'])) {
                error_log(date('[Y-m-d H:i:s] ') . "Failed to delete old image: " . $row['image_url']);
                // Continue even if deletion fails
            } else {
                error_log(date('[Y-m-d H:i:s] ') . "Old image deleted: " . $row['image_url']);
            }
        }
    }

    // Update lookbook entry
    if ($targetFile) {
        $sql = "UPDATE lookbooks SET collection = ?, gender = ?, image_url = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            error_log(date('[Y-m-d H:i:s] ') . "Prepare failed for UPDATE with image: " . $conn->error);
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Database error: ' . $conn->error]);
            ob_end_flush();
            exit;
        }
        $stmt->bind_param("sssi", $collection, $gender, $targetFile, $id);
    } else {
        $sql = "UPDATE lookbooks SET collection = ?, gender = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            error_log(date('[Y-m-d H:i:s] ') . "Prepare failed for UPDATE without image: " . $conn->error);
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Database error: ' . $conn->error]);
            ob_end_flush();
            exit;
        }
        $stmt->bind_param("ssi", $collection, $gender, $id);
    }

    if ($stmt->execute()) {
        error_log(date('[Y-m-d H:i:s] ') . "Lookbook updated successfully for ID: $id");
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Lookbook updated successfully']);
    } else {
        error_log(date('[Y-m-d H:i:s] ') . "UPDATE query failed: " . $stmt->error);
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Update failed: ' . $stmt->error]);
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