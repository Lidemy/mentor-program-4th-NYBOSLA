<?php
require_once('conn.php');

// $id = $_POST['id'];
$nickname = $_POST['nickname'];
$mail = $_POST['mail'];
$password = $_POST['password'];

if(empty($nickname)||empty($mail)||empty($password)){
    // 方法一
    // header('Location:comment.php?errMsg=填寫資料不齊全!!!!!');
    header('Location:register.php?errCode=1');
    die ('資料不全');
}
$sql ="INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`) VALUES (NULL, '$nickname', '$mail', '$password', current_timestamp());";

$result = $conn ->query ($sql);
if($result){
   header('Location:login.php');
}else{

    if(strpos($conn->error,"Duplicate entry")!==false){

        header('Location: register.php?errCode=2');
    }
    die($conn->error);
}

?>