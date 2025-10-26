<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$conn = new mysqli('localhost', 'root', '', 'react_admin_db');

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Database connection failed']));
}

if (!isset($_FILES['image'])) {
    echo json_encode(['success' => false, 'message' => 'No image uploaded']);
    exit;
}

$image = $_FILES['image'];
$uploadDir = 'uploads/';
$uploadFile = $uploadDir . basename($image['name']);

if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

$imageFileType = strtolower(pathinfo($uploadFile, PATHINFO_EXTENSION));
$allowedTypes = ['jpg', 'jpeg', 'png', 'gif'];

if (!in_array($imageFileType, $allowedTypes)) {
    echo json_encode(['success' => false, 'message' => 'Invalid image format']);
    exit;
}

if (move_uploaded_file($image['tmp_name'], $uploadFile)) {
    $imageUrl = 'http://localhost/react_admin_db/' . $uploadFile;
    $stmt = $conn->prepare('INSERT INTO gallery (image_url) VALUES (?)');
    $stmt->bind_param('s', $imageUrl);
    
    if ($stmt->execute()) {
        $newId = $conn->insert_id;
        echo json_encode([
            'success' => true,
            'message' => 'Image added successfully',
            'newItem' => ['id' => $newId, 'image_url' => $imageUrl],
            'image_url' => $imageUrl
        ]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to save image to database']);
    }
    
    $stmt->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to upload image']);
}

$conn->close();
?>