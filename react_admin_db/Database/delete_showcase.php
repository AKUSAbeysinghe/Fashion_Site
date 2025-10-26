<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Enable error logging
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', 'php_errors.log');

$conn = new mysqli('localhost', 'root', '', 'react_admin_db');

if ($conn->connect_error) {
    error_log("Database connection failed: " . $conn->connect_error);
    die(json_encode(['success' => false, 'message' => 'Database connection failed: ' . $conn->connect_error]));
}

$id = $_POST['id'] ?? 0;

if ($id <= 0) {
    error_log("Invalid ID: " . $id);
    die(json_encode(['success' => false, 'message' => 'Invalid ID']));
}

$stmt = $conn->prepare('SELECT image_url FROM showcase WHERE id = ?');
if (!$stmt) {
    error_log("Prepare failed: " . $conn->error);
    die(json_encode(['success' => false, 'message' => 'Prepare failed: ' . $conn->error]));
}

$stmt->bind_param('i', $id);
$stmt->execute();
$result = $stmt->get_result();
$image = $result->fetch_assoc();
$stmt->close();

if ($image && $image['image_url']) {
    $imagePath = str_replace('http://localhost/react_admin_db/', '', $image['image_url']);
    if (file_exists($imagePath)) {
        if (!unlink($imagePath)) {
            error_log("Failed to delete image file: " . $imagePath);
        }
    }
}

$stmt = $conn->prepare('DELETE FROM showcase WHERE id = ?');
if (!$stmt) {
    error_log("Prepare failed: " . $conn->error);
    die(json_encode(['success' => false, 'message' => 'Prepare failed: ' . $conn->error]));
}

$stmt->bind_param('i', $id);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Image deleted successfully']);
} else {
    error_log("Execute failed: " . $stmt->error);
    echo json_encode(['success' => false, 'message' => 'Failed to delete image: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>