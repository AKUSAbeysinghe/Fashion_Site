<?php
$host = "localhost";
$user = "root"; // change if needed
$pass = ""; // set your MySQL password if any
$db = "react_admin_db";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}
?>
