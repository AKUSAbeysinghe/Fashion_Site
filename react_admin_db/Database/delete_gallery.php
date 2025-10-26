<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$conn = new mysqli('localhost', 'root', '', 'react_admin_db');

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Database connection failed']));
}

$id = $_POST['id'] ?? 0;

if ($id <= 0) {
    echo json_encode(['success' => false, 'message' => 'Invalid ID']);
    exit;
}

$stmt = $conn->prepare('SELECT image_url FROM gallery WHERE id = ?');
$stmt->bind_param('i', $id);
$stmt->execute();
$result = $stmt->get_result();
$image = $result->fetch_assoc();

if ($image && $image['image_url']) {
    $imagePath = str_replace('http://localhost/react_admin_db/', '', $image['image_url']);
    if (file_exists($imagePath)) {
        unlink($imagePath);
    }
}

$stmt = $conn->prepare('DELETE FROM gallery WHERE id = ?');
$stmt->bind_param('i', $id);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Image deleted successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to delete image']);
}

$stmt->close();
$conn->close();
?>