<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "ecommerce";

// Create connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Failed to connect to DB: " . $conn->connect_error);
}

// No message for successful connection
?>


