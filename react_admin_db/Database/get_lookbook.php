<?php
// Allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get query parameters
$gender = isset($_GET['gender']) ? $_GET['gender'] : '';
$collection = isset($_GET['collection']) ? $_GET['collection'] : '';

// Build the SQL query
$query = "SELECT * FROM lookbooks";
$conditions = [];
$params = [];
$types = "";

if ($gender) {
    $conditions[] = "gender = ?";
    $params[] = $gender;
    $types .= "s";
}
if ($collection) {
    $conditions[] = "collection = ?";
    $params[] = $collection;
    $types .= "s";
}

if (!empty($conditions)) {
    $query .= " WHERE " . implode(" AND ", $conditions);
}

$query .= " ORDER BY id DESC";

// Prepare and execute the query
$stmt = $conn->prepare($query);
if (!empty($params)) {
    $stmt->bind_param($types, ...$params);
}

$stmt->execute();
$result = $stmt->get_result();

$lookbooks = [];
$baseUrl = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://" . $_SERVER['HTTP_HOST'] . "/react_admin_db/";

while ($row = $result->fetch_assoc()) {
    $row['image_url'] = $baseUrl . ltrim($row['image_url'], '/');
    $lookbooks[] = $row;
}

echo json_encode($lookbooks);
$stmt->close();
$conn->close();
?>