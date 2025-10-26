<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: Content-Type");

// Get raw POST data
$input = file_get_contents("php://input");
$data = json_decode($input);

if (!$data) {
    echo json_encode(["success" => false, "message" => "No input received or invalid JSON"]);
    exit;
}

$username = $data->username ?? null;
$email = $data->email ?? null;
$password = $data->password ?? null;

if (!$username || !$email || !$password) {
    echo json_encode(["success" => false, "message" => "All fields are required"]);
    exit;
}

// DB connect
$conn = new mysqli("localhost", "root", "", "react_admin_db");
if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "Database connection failed"]);
    exit;
}

// Hash password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Insert into DB
$stmt = $conn->prepare("INSERT INTO admins (username, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $email, $hashedPassword);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Signup successful"]);
} else {
    echo json_encode(["success" => false, "message" => "Signup failed: ".$stmt->error]);
}

$stmt->close();
$conn->close();
?>
