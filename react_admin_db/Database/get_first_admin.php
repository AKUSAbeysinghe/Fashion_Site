<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$host = "localhost";
$user = "root"; // Your DB username
$pass = "";     // Your DB password
$db = "react_admin_db"; // Your DB name

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    echo json_encode(["success" => false, "message" => "DB connection failed: " . $conn->connect_error]);
    exit;
}

$stmt = $conn->prepare("SELECT id, username, email FROM admins LIMIT 1");
$stmt->execute();
$result = $stmt->get_result();

if ($result && $result->num_rows > 0) {
    $admin = $result->fetch_assoc();
    echo json_encode(["success" => true, "admin" => $admin]);
} else {
    echo json_encode(["success" => false, "message" => "No admins found"]);
}

$stmt->close();
$conn->close();
?>