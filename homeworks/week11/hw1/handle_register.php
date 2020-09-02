<?php
// 登入狀態 
session_start();
require_once('conn.php');


// $id = $_POST['id'];
$nickname = $_POST['nickname'];
$mail = $_POST['mail'];
// $password = $_POST['password'];
// 改成hash

$password = password_hash($_POST['password'],PASSWORD_DEFAULT);

if(empty($nickname)||empty($mail)||empty($password)){
    // 方法一
    // header('Location:comment.php?errMsg=填寫資料不齊全!!!!!');
    header('Location:register.php?errCode=1');
    die ('資料不全');
}
// 沒有加入prepared statement寫法
// $sql ="INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`) VALUES (NULL, '$nickname', '$mail', '$password', current_timestamp());";
// 有加入prepared statement寫法
$sql ="INSERT INTO `users` (`username`, `email`, `password`) VALUES (?,?,?)";
$stmt = $conn->prepare($sql);
$stmt ->bind_param('sss',$nickname, $mail, $password);

// $result = $conn ->query ($sql);
$result = $stmt->execute();
if($result){
   $_SESSION['mail']=$mail;
   header('Location:comment.php');
}else{

    if(strpos($conn->error,"Duplicate entry")!==false){

        header('Location: register.php?errCode=2');
    }
    die($conn->error);
}

?>