<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$conn = new mysqli('localhost', 'root', '', 'react_admin_db');

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Database connection failed']));
}

$result = $conn->query('SELECT id, image_url FROM gallery ORDER BY created_at DESC');
$gallery = [];

while ($row = $result->fetch_assoc()) {
    $gallery[] = $row;
}

echo json_encode($gallery);

$conn->close();
?>