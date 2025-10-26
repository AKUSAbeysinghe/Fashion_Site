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
$image = $_FILES['image'] ?? null;
$imageUrl = null;

if ($id <= 0) {
    echo json_encode(['success' => false, 'message' => 'Invalid ID']);
    exit;
}

if ($image && $image['error'] === UPLOAD_ERR_OK) {
    $uploadDir = 'Uploads/';
    $uploadFile = $uploadDir . basename($image['name']);

    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    // Validate image MIME type
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime = finfo_file($finfo, $image['tmp_name']);
    finfo_close($finfo);
    $allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp'];

    if (!in_array($mime, $allowedMimeTypes)) {
        echo json_encode(['success' => false, 'message' => 'Invalid image format. Allowed formats: JPEG, PNG, GIF, BMP, WebP']);
        exit;
    }

    if (move_uploaded_file($image['tmp_name'], $uploadFile)) {
        $imageUrl = 'http://localhost/react_admin_db/' . $uploadFile;
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to upload image']);
        exit;
    }
}

$stmt = $conn->prepare('UPDATE gallery SET image_url = ? WHERE id = ?');
$stmt->bind_param('si', $imageUrl, $id);

if ($stmt->execute()) {
    echo json_encode([
        'success' => true,
        'message' => 'Image updated successfully',
        'image_url' => $imageUrl
    ]);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to update image']);
}

$stmt->close();
$conn->close();
?>