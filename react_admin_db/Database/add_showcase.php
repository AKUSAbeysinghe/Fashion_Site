<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "react_admin_db";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['image'])) {
        $target_dir = "uploads/";
        if (!file_exists($target_dir)) {
            mkdir($target_dir, 0777, true);
        }

        $image = $_FILES['image'];
        $image_name = uniqid() . '_' . basename($image['name']);
        $target_file = $target_dir . $image_name;

        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
        $allowed_types = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];

        if (!in_array($imageFileType, $allowed_types)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Invalid file type.']);
            exit;
        }

        if ($image['size'] > 5000000) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'File size exceeds 5MB limit.']);
            exit;
        }

        if (move_uploaded_file($image['tmp_name'], $target_file)) {
            $image_url = 'http://localhost/react_admin_db/' . $target_file;

            $stmt = $conn->prepare("INSERT INTO showcase (image_url) VALUES (:image_url)");
            $stmt->bindParam(':image_url', $image_url);
            $stmt->execute();

            $new_id = $conn->lastInsertId();
            echo json_encode([
                'success' => true,
                'message' => 'Image uploaded successfully',
                'newItem' => ['id' => $new_id, 'image_url' => $image_url]
            ]);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to upload image.']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'No image provided.']);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
}

$conn = null;
?>