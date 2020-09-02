<?php
session_start();
require_once('conn.php');
require_once('utils.php');

$sql ='';
// $id = $_POST['id'];
// $name  = $_POST['nickname'];
$comment = $_POST['comment'];

if(empty($comment)){
    // 方法一
    // header('Location:comment.php?errMsg=填寫資料不齊全!!!!!');
    header('Location:comment.php?errCode=1');
    die ('資料不全');
}
$user =getUserFromUsername($_SESSION['mail']);
$username = $user['email'];
$user_sql = sprintf(
  "select email from users where email='%s'",
  $username
);
$user_result = $conn->query($user_sql);
$row = $user_result->fetch_assoc();
// $name = $row['email'];

// echo $username;
// 沒有加入prepared statement的寫法
// $sql = "INSERT INTO `comments` (`id`, `mail`, `content`, `created_at`) VALUES (NULL, '$username', '$comment', current_timestamp());";
// 加入了prepared statement的寫法
$sql = "INSERT INTO `comments` (mail, content) VALUES (?,?)";
$stmt = $conn->prepare($sql);
$stmt ->bind_param('ss',$username, $comment);
// 沒有加prepared statement (no stmt寫法)
// $result = $conn ->query ($sql);
$result = $stmt->execute();
if($result){
   header('Location:comment.php');
}else{
    die($conn->error);
}

?>