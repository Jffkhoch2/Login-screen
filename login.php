<?php
session_start();

$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'];
$password = $data['password'];

// Simple hardcoded check for demo purposes
if ($username === 'user' && $password === 'password') {
    $_SESSION['user'] = $username;
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid username or password']);
}
?>
