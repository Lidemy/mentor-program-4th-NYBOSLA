<?php
require_once('conn.php');
$token = $_COOKIE['token'];

$sql = sprintf("DELETE FROM `tokens` WHERE token = '%s'",
$token);
$conn->query($sql);


setcookie("token","",time() - 3600);
// header("Location:login.php");
header("Location:comment.php"); 
?>