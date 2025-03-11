<?php
session_start(); // Start the session

// Destroy all session data
session_unset(); // Unset all session variables
session_destroy(); // Destroy the session

// Redirect to the login page or any other page (e.g., homepage)
header("Location: login.php");
exit(); // Ensure no further code is executed
?>
