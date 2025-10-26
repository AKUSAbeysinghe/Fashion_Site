<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', 'php_errors.log');

error_log("Starting update_showcase.php");

include "db.php"; // DB connection

try {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $id = isset($_POST['id']) ? (int)$_POST['id'] : null;
        if (!$id) {
            error_log("Invalid ID provided");
            throw new Exception("Invalid ID.");
        }

        $sql = "SELECT image_url FROM showcase WHERE id = ?";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            error_log("Prepare failed: " . $conn->error);
            throw new Exception("Database prepare error: " . $conn->error);
        }
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $existing = $result->fetch_assoc();
        $stmt->close();

        if (!$existing) {
            error_log("Image not found for ID: $id");
            throw new Exception("Image not found.");
        }

        $image_url = $existing['image_url'];
        if (isset($_FILES['image']) && $_FILES['image']['size'] > 0) {
            $target_dir = "Uploads/";
            if (!file_exists($target_dir)) {
                mkdir($target_dir, 0777, true);
                error_log("Created Uploads directory");
            }

            $image = $_FILES['image'];
            $image_name = uniqid() . '_' . basename($image['name']);
            $target_file = $target_dir . $image_name;

            $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
            $allowed_types = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];

            if (!in_array($imageFileType, $allowed_types)) {
                error_log("Invalid file type: $imageFileType");
                throw new Exception("Invalid file type. Allowed types: " . implode(', ', $allowed_types));
            }

            if ($image['size'] > 5000000) {
                error_log("File size exceeds 5MB: " . $image['size']);
                throw new Exception("File size exceeds 5MB limit.");
            }

            if (move_uploaded_file($image['tmp_name'], $target_file)) {
                if (file_exists($existing['image_url'])) {
                    unlink($existing['image_url']);
                    error_log("Deleted old image: " . $existing['image_url']);
                }
                $image_url = 'http://localhost/react_admin_db/' . $target_file;
                error_log("Uploaded new image to: $target_file");
            } else {
                error_log("Failed to upload new image: " . $image['name']);
                throw new Exception("Failed to upload new image.");
            }
        }

        $sql = "UPDATE showcase SET image_url = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            error_log("Prepare failed: " . $conn->error);
            throw new Exception("Database prepare error: " . $conn->error);
        }
        $stmt->bind_param("si", $image_url, $id);
        if (!$stmt->execute()) {
            error_log("Execute failed: " . $stmt->error);
            throw new Exception("Database update error: " . $stmt->error);
        }

        error_log("Updated showcase record with ID: $id");
        echo json_encode([
            'success' => true,
            'message' => 'Image updated successfully',
            'image_url' => $image_url
        ]);
        $stmt->close();
    } else {
        error_log("Invalid request method");
        throw new Exception("Invalid request method.");
    }
} catch (Exception $e) {
    error_log("Error in update_showcase.php: " . $e->getMessage());
    http_response_code(200); // Match LookbookAdmin expectation
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}

$conn->close();
?>