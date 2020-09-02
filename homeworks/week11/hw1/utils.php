<?php
require_once('conn.php');
function generateToken() {
    $s ='';
    for($i=1;$i<=16;$i++){
        $s .=chr(rand(65,90));
    }
    return $s;
}
// echo generateToken();
// header("Location:comment.php");

function getUserFromUsername($email){
        global $conn;
        
//username(mail)
        $sql = sprintf(
            "select * from users where email = '%s'",
            $email
          );
        //  echo $sql;
        $result = $conn->query($sql);
        $row = $result -> fetch_assoc();
        //username id email
return $row;

        
    }

    function escape($str){
return htmlspecialchars($str, ENT_QUOTES);
    }