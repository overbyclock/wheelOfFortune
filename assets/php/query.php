<?php

$server = '';
$user   = '';
$pass   = '';
$db     = '';

$conn = mysqli_connect($server, $user, $pass, $db);

mysqli_query($conn, "SET NAMES 'utf8'");

$sql = "SELECT word, definition, author FROM words ORDER BY RAND() LIMIT 1";
$query = mysqli_query($conn, $sql);
$result = $query->fetch_assoc();
echo json_encode($result);
