<?php
// 首先第一行 
session_start();
require_once('conn.php');
require_once('utils.php');

// $id = $_POST['id'];

$mail = $_POST['mail'];
$password = $_POST['password'];

// $user_id = $_POST['user_id'];

if(empty($mail)||empty($password)){
    header('Location:register.php?errCode=1');
    // 方法一
    // header('Location:comment.php?errMsg=填寫資料不齊全!!!!!');
    // header('Location:register.php?errCode=1');
    die ('資料不全');
}
// 沒有prepared statement寫法
// $sql = sprintf(
//     "SELECT * FROM `users` where email ='%s' ",
//     $mail
// );
// 有prepared statement寫法
$sql ="SELECT * FROM `users` where email =?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('s',$mail);
// $result = $conn ->query ($sql);
$result=$stmt->execute();
// 拿結果回來
$result = $stmt->get_result();

// if(!$result){
//     die($conn->error);
// }
// 沒有查到使用者
if($result->num_rows===0){
    header("Location:login.php?errCode=3");
    exit();
}
// 有查到使用者，把資料拿出來
$row = $result->fetch_assoc();
// $password,$row['password']  hash回password跟hash過進入資料庫的password
// 輸入前的password   -->   $password = $_POST['password'];
if(password_verify($password,$row['password'])){
        // 寫session
        $_SESSION['mail']=$mail;
        /*
        1. 產生session id
        2.把mail寫入檔案
        3.set-cookie:session-id
        */   
        header("Location:comment.php");    
            // header("Location:login.php?errCode=3");     
        // 抓取到所有資料
        // print_r($result);
        // 測試是否有抓取到該資料,0是沒有1是有 
        // print_r($result->num_rows);
    
}else{
    header("Location:login.php?errCode=3");
}




?>