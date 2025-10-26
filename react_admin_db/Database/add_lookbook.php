<?php
// Allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include 'db.php'; // DB connection

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
    exit();
}

if (isset($_FILES['image'])) {
    $collection = $_POST['collection'] ?? '';
    $gender = $_POST['gender'] ?? '';

    // Folder to save uploads
    $targetDir = "uploads/lookbooks/"; // ✅ fixed folder name (match your existing one)
    if (!is_dir($targetDir)) mkdir($targetDir, 0777, true);

    $imageName = time() . "_" . basename($_FILES['image']['name']);
    $targetFile = $targetDir . $imageName;

    if (move_uploaded_file($_FILES['image']['tmp_name'], $targetFile)) {
        // Save path to DB
        $stmt = $conn->prepare("INSERT INTO lookbooks (collection, gender, image_url) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $collection, $gender, $targetFile);

        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'image_url' => $targetFile, 'id' => $stmt->insert_id]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Database insert failed']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to upload image']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'No image uploaded']);
}
?>
