<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include "db.php";

$response = ["success" => false, "message" => ""];

// Inputs
$category   = $_POST['collection'] ?? '';   // Use collection as category (matches frontend)
$collection = $_POST['collection'] ?? ''; // collection name
$gender     = $_POST['gender'] ?? '';     // men / women / kids
$brand      = $_POST['brand'] ?? '';
$name       = $_POST['name'] ?? '';
$price      = $_POST['price'] ?? 0;
$stock      = $_POST['stock'] ?? 0;
$image      = "";

// Normalize (lowercase for consistency)
$category = strtolower(trim($category));
$gender   = strtolower(trim($gender));

// Handle image upload
if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $uploadDir = "uploads/";
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }
    $fileName = time() . "_" . basename($_FILES["image"]["name"]);
    $targetFile = $uploadDir . $fileName;

    if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
        $image = $targetFile;
    }
}

// Insert
$sql = "INSERT INTO products (category, collection, gender, brand, name, price, stock, image) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssdis", $category, $collection, $gender, $brand, $name, $price, $stock, $image);

if ($stmt->execute()) {
    $response["success"] = true;
    $response["message"] = "Product added successfully";
} else {
    $response["message"] = "Database error: " . $conn->error;
}

echo json_encode($response);

$stmt->close();
$conn->close();
?>