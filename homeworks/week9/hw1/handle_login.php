<?php
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

$sql = sprintf(
    "SELECT * FROM `users` where email ='%s' and password ='%s'",
    $mail,
    $password
);

$result = $conn ->query ($sql);

if(!$result){
    die($conn->error);
}
if($result->num_rows){
// 給token

// 把token引入
$token = generateToken();
// 建立sql語法，把token存入資料庫  
$sql_tokens =sprintf(
    "INSERT INTO tokens(token,username) values('%s','%s')",
$token,
$mail
);
// 建立sql連線
$result= $conn ->query($sql_tokens);
if(!$result){
    die($conn->error);
}

// 登入成功
// echo"登入成功";
// $expire = 3600 *24 *30;
// time()->指現在時間
// setcookie("mail",$mail,time() + 3600);
setcookie("token",$token,time() + 3600);

header("Location:comment.php");
}else{
    
    // header("Location:login.php?errCode=3");
}
// 抓取到所有資料
// print_r($result);
// 測試是否有抓取到該資料,0是沒有1是有 
// print_r($result->num_rows);
?>