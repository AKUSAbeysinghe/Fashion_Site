<?php
include "db.php";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$gender   = isset($_GET['gender'])   ? strtolower(trim($_GET['gender']))   : '';
$category = isset($_GET['category']) ? strtolower(trim($_GET['category'])) : '';
$brand    = isset($_GET['brand'])    ? strtolower(trim($_GET['brand']))    : '';
$limit    = isset($_GET['limit'])    ? intval($_GET['limit'])              : 0;

$sql    = "SELECT id, category, collection, gender, brand, name, price, stock, image FROM products";
// ✅ FIX: Handle NULL category by COALESCE to '' (empty string) for consistent filtering
$sql    = "SELECT id, COALESCE(category, '') AS category, collection, gender, brand, name, price, stock, image FROM products";
$conds  = [];
$params = [];
$types  = '';

if ($gender !== '')   { $conds[] = "LOWER(gender)=?";   $params[] = $gender;   $types .= 's'; }
if ($category !== '') { $conds[] = "LOWER(category)=?"; $params[] = $category; $types .= 's'; }
if ($brand !== '')    { $conds[] = "LOWER(brand)=?";    $params[] = $brand;    $types .= 's'; }

if ($conds) { $sql .= " WHERE " . implode(" AND ", $conds); }
$sql .= " ORDER BY id DESC";
if ($limit > 0) { $sql .= " LIMIT ?"; $params[] = $limit; $types .= 'i'; }

$stmt = $conn->prepare($sql);
if (!$stmt) {
  http_response_code(500);
  echo json_encode(["error" => $conn->error]);
  exit;
}

if (!empty($params)) {
  $stmt->bind_param($types, ...$params);
}

$stmt->execute();
$res = $stmt->get_result();

$items   = [];
$baseUrl = "http://localhost/react_admin_db/uploads/";

while ($row = $res->fetch_assoc()) {
  $img = $row['image'];

  if (preg_match('#^https?://#', $img)) {
    $row['image_url'] = $img;
  } elseif (strpos($img, 'uploads/') === 0) {
    $row['image_url'] = "http://localhost/react_admin_db/" . $img;
    $row['image']     = basename($img);
  } else {
    $row['image_url'] = $baseUrl . $img;
  }
  // ✅ FIX: Format price as string with ₹ for frontend display (matches DB float)
  // $row['price'] = "₹" . number_format((float)$row['price'], 2);
  $row['price'] = (float)$row['price'];


  $items[] = $row;
}

echo json_encode($items);
$stmt->close();
$conn->close();
?>