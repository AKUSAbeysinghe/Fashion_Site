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
ini_set('error_log', __DIR__ . '/debug_delete_product.log');

try {
    // Log request start
    error_log(date('[Y-m-d H:i:s] ') . "Delete product request received: " . json_encode($_POST));

    // Include database connection
    include "db.php";

    // Verify database connection
    if (!isset($conn) || $conn->connect_error) {
        error_log(date('[Y-m-d H:i:s] ') . "DB Connection failed: " . ($conn->connect_error ?? 'Connection not established'));
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
        echo json_encode(['success' => false, 'message' => 'Valid product ID required']);
        ob_end_flush();
        exit;
    }
    error_log(date('[Y-m-d H:i:s] ') . "Processing delete for product ID: $id");

    // Check if products table exists
    $result = $conn->query("SHOW TABLES LIKE 'products'");
    if ($result->num_rows === 0) {
        error_log(date('[Y-m-d H:i:s] ') . "Table 'products' does not exist");
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Table products does not exist']);
        ob_end_flush();
        exit;
    }

    // Check if the product exists
    $sql = "SELECT id FROM products WHERE id = ?";
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
        error_log(date('[Y-m-d H:i:s] ') . "No product found for ID: $id");
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'Product not found']);
        ob_end_flush();
        exit;
    }
    error_log(date('[Y-m-d H:i:s] ') . "Product found for ID: $id");

    // Delete product
    $sql = "DELETE FROM products WHERE id = ?";
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
            error_log(date('[Y-m-d H:i:s] ') . "Product deleted successfully for ID: $id");
            http_response_code(200);
            echo json_encode(['success' => true, 'message' => 'Product deleted successfully']);
        } else {
            error_log(date('[Y-m-d H:i:s] ') . "No rows affected for ID: $id");
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Product not found']);
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