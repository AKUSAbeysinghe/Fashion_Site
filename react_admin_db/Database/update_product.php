<?php
// Start output buffering to capture any unexpected output
ob_start();
// Clear any existing output
ob_clean();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Adjust to http://localhost:3000 or specific port
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Configure error logging
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/debug_update_product.log');

try {
    // Log request start
    error_log(date('[Y-m-d H:i:s] ') . "Update product request received: " . json_encode($_POST) . ", Files: " . json_encode($_FILES));

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

    // Validate inputs
    $id = isset($_POST['id']) ? (int)$_POST['id'] : 0;
    $category = $_POST['category'] ?? ''; // Optional
    $collection = $_POST['collection'] ?? '';
    $gender = $_POST['gender'] ?? '';
    $brand = $_POST['brand'] ?? '';
    $name = $_POST['name'] ?? '';
    $price = isset($_POST['price']) ? (float)$_POST['price'] : 0;
    $stock = isset($_POST['stock']) ? (int)$_POST['stock'] : 0;

    if ($id <= 0 || !$collection || !$gender || !$brand || !$name || $price <= 0 || $stock < 0) {
        error_log(date('[Y-m-d H:i:s] ') . "Invalid input: ID=$id, Collection=$collection, Gender=$gender, Brand=$brand, Name=$name, Price=$price, Stock=$stock");
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Required fields (ID, collection, gender, brand, name, price, stock) are missing or invalid']);
        ob_end_flush();
        exit;
    }
    error_log(date('[Y-m-d H:i:s] ') . "Processing update for product ID: $id, Category: $category");

    // Check if products table exists
    $result = $conn->query("SHOW TABLES LIKE 'products'");
    if ($result->num_rows === 0) {
        error_log(date('[Y-m-d H:i:s] ') . "Table 'products' does not exist");
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Table products does not exist']);
        ob_end_flush();
        exit;
    }

    // Check if image_url column exists
    $imageColumnExists = false;
    $result = $conn->query("SHOW COLUMNS FROM products LIKE 'image_url'");
    if ($result->num_rows > 0) {
        $imageColumnExists = true;
        error_log(date('[Y-m-d H:i:s] ') . "image_url column exists in products table");
    } else {
        error_log(date('[Y-m-d H:i:s] ') . "image_url column does not exist in products table");
    }

    // Check if the product exists
    $sql = "SELECT id" . ($imageColumnExists ? ", image_url" : "") . " FROM products WHERE id = ?";
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
    error_log(date('[Y-m-d H:i:s] ') . "Product found for ID: $id, image_url: " . ($imageColumnExists && isset($row['image_url']) ? $row['image_url'] : 'none'));

    $image = "";
    if ($imageColumnExists && isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK && $_FILES['image']['size'] > 0) {
        $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!in_array($_FILES['image']['type'], $allowedTypes)) {
            error_log(date('[Y-m-d H:i:s] ') . "Invalid image type: " . $_FILES['image']['type']);
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Invalid image type. Only JPEG, PNG, or GIF allowed']);
            ob_end_flush();
            exit;
        }

        $uploadDir = "Uploads/products/";
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
            error_log(date('[Y-m-d H:i:s] ') . "Created directory: $uploadDir");
        }
        $fileName = time() . "_" . basename($_FILES["image"]["name"]);
        $targetFile = $uploadDir . $fileName;

        if (!move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
            error_log(date('[Y-m-d H:i:s] ') . "Failed to upload image: " . $_FILES["image"]["name"]);
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Failed to upload image']);
            ob_end_flush();
            exit;
        }
        error_log(date('[Y-m-d H:i:s] ') . "Image uploaded: $targetFile");
        $image = $targetFile;

        // Delete old image if it exists
        if (!empty($row['image_url']) && file_exists($row['image_url'])) {
            if (!unlink($row['image_url'])) {
                error_log(date('[Y-m-d H:i:s] ') . "Failed to delete old image: " . $row['image_url']);
            } else {
                error_log(date('[Y-m-d H:i:s] ') . "Old image deleted: " . $row['image_url']);
            }
        }
    }

    // Update product
    if ($imageColumnExists && $image) {
        $sql = "UPDATE products SET category = ?, collection = ?, gender = ?, brand = ?, name = ?, price = ?, stock = ?, image_url = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            error_log(date('[Y-m-d H:i:s] ') . "Prepare failed for UPDATE with image: " . $conn->error);
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Database error: ' . $conn->error]);
            ob_end_flush();
            exit;
        }
        $stmt->bind_param("sssssdisi", $category, $collection, $gender, $brand, $name, $price, $stock, $image, $id);
    } else {
        $sql = "UPDATE products SET category = ?, collection = ?, gender = ?, brand = ?, name = ?, price = ?, stock = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            error_log(date('[Y-m-d H:i:s] ') . "Prepare failed for UPDATE without image: " . $conn->error);
            http_response_code(500);
            echo json_encode(['success' => false, 'message' => 'Database error: ' . $conn->error]);
            ob_end_flush();
            exit;
        }
        $stmt->bind_param("sssssdis", $category, $collection, $gender, $brand, $name, $price, $stock, $id);
    }

    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            error_log(date('[Y-m-d H:i:s] ') . "Product updated successfully for ID: $id");
            http_response_code(200);
            echo json_encode(['success' => true, 'message' => 'Product updated successfully']);
        } else {
            error_log(date('[Y-m-d H:i:s] ') . "No changes made for ID: $id");
            http_response_code(200);
            echo json_encode(['success' => true, 'message' => 'No changes made to product']);
        }
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