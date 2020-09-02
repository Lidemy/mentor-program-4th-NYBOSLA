<?php
session_start();
require_once('conn.php');
require_once('utils.php');
/*
1.從cookie裡面讀取phpsessid(token)
2.從檔案裡面讀取session id的內容
3.放到$_session
*/
$email =NULL;
if(!empty($_SESSION['mail'])){
    $email = $_SESSION['mail'];   
}

$sql ="SELECT * FROM `comments` ORDER BY created_at DESC";
//  echo $sql;
$stmt = $conn->prepare($sql);
$result=$stmt->execute();


// $result = $conn->query($sql);
if(!$result){
        die('error'. $conn->error);
}
// 拿結果回來
$result = $stmt->get_result();

// if(!empty($_COOKIE['email'])){
//     $email =$_COOKIE['email'];
// }

// if(!empty($_COOKIE['mail'])){
//     $email = $_COOKIE['mail'];
// }




    
    // $email =$user['username'];


// 第一次的寫法
// if(!empty($_COOKIE['token'])){
//     $token = $_COOKIE['token'];
//     $sql = sprintf(
//         "select username from tokens where token = '%s'",
//         $token
//       );
//     //  echo $sql;
//     $result = $conn->query($sql);
//     $row = $result -> fetch_assoc();
    
//     if(!$result){
//         die($conn->error);
//     }
//     $email = $row['username'];
// }




// echo $token;
//  $sql = "SELECT username FROM `tokens` WHERE tokens.token =`$token`";










// print_r($_COOKIE);


?>
    <!doctype html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
        <meta name="generator" content="Jekyll v4.1.1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <title>comments</title>

        <link rel="canonical" href="https://getbootstrap.com/docs/4.5/examples/jumbotron/">

        <!-- Bootstrap core CSS -->
        <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">

        <style>
            .bd-placeholder-img {
                font-size: 1.125rem;
                text-anchor: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            
            @media (min-width: 768px) {
                .bd-placeholder-img-lg {
                    font-size: 3.5rem;
                }
            }
        </style>
        <!-- Custom styles for this template -->
        <link href="jumbotron.css" rel="stylesheet">
    </head>

    <body>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="#">留言板</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown01">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                    <?php
                    if(!$email){
                        echo "<a href='register.php'>
                        <button class='ml-4 btn btn-outline-success my-2 my-sm-0'>會員註冊</button>
                        </a>
                        <a href='logout.php'>
                        <button class='ml-4 btn btn-outline-success my-2 my-sm-0' >登入</button>
                        </a>";
                    }  
                    ?>
                    <?php
                    if($email){
                        echo "<a href='handle_logout.php'>
                        <button class='ml-4 btn btn-outline-success my-2 my-sm-0'>登出</button>
                        </a>";     
                    echo "<h4 class='ml-4' style='color:white'>歡迎";
                    echo escape("$email");
                    echo"</h4>";
              
                }

                    ?>

                </form>
            </div>
        </nav>

     

        <main role="main">

            <!-- Main jumbotron for a primary marketing message or call to action -->
            <div class="alert alert-warning alert-dismissible fade show text" role="alert">
                <strong>注意! 本站為練習用網站，因教學用刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</strong>
                
            </div>

            <?php

                if(!empty($_GET['errCode'])){
                    // 第一種方法，缺點是直接改網址列就可以更改網頁內容
                    // $msg = $_GET['errMsg'];
                    // echo "<h2>".$msg."</h2>";
                    // 第二種方法 
                    $code=$_GET['errCode'];
                    $msg = 'Error';
                    if($code ==='1'){
                        
                     $msg ="填寫資料不齊全，請補填寫";
                    }

                    echo "<div class='alert alert-danger alert-dismissible fade show text' role='alert'>
                    <strong>".$msg."</strong> 
                </div>";
                }

            ?>
            
            <div class="jumbotron">
                <div class="container">
                    <h1 class="display-3">Hello, world!</h1>
                    <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                    <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
                </div>
            </div>

            <div class="container">
                <!-- Example row of columns -->
                <div class="row mb-4">
                    <div class="col-md-12">
                        <h2>留言板</h2>
            

                        <?php  if($email) { ?>
                        <form method="POST" action="handle_add.php">
                            <div class="form-group">
                                <!-- <input name='nickname' class="form-control mr-sm-2 mb-4" type="text" placeholder="暱稱"> -->
                                
                               
                                <textarea placeholder="Leave your message!!!" class="form-control" id="exampleFormControlTextarea1" name='comment' rows="10"></textarea>
                            </div>
                            <button type="submit" class="btn btn-info">送出</button>
                        </form>

                    </div>
                </div>
                




                <div class="row mb-4">
                    <div class="col-md-12 ">
                        <h2>留言</h2>



                        <div class="card mb-8" style="max-width: 540spx;">
                            <div class="row no-gutters">
                         <div class='col-md-12'>
                                <!-- 顯示留言板 -->
                                <?php



$sql ="SELECT * FROM `comments` ORDER BY created_at DESC";
$result = $conn->query($sql);
if(!$result){
    
    header('Location:comment.php?errMsg=資料不齊全');
    die('Error:'. $conn->error);
}
if($result->num_rows>0){


while($row = $result -> fetch_assoc()){
// 測試看看印出所有資料
//  print_r($row);
  echo"<div class='card-body >
      <img src='http://placehold.it/64x64' class=' mb-2 rounded-circle'>";
      echo "<h5 class='card-title'>";
      echo escape("$row[mail]");
    //   echo $row['mail'];   
    echo "</h5>";
    echo"<p style='white-space:pre-line ' class='card-text'>";
    echo escape("$row[content]");
    echo "</p>";
    echo"<p class='card-text'><small class='text-muted'>";
    echo $row['created_at'];
    echo "</small></p>
    </div>";
}

}

?>





<?php }else { ?>

    <div class="row mb-4">
                    <div class="col-md-12 ">
                        <h4 class="alert alert-primary" role="alert">留言請登入</h4>
                        </div>
                        </div>

<?php  } ?> 
                                    <!-- <div class="col-md-12">
                                        <div class="card-body">
                                            <img src="http://placehold.it/64x64" class=" mb-2 rounded-circle">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div> -->
</div>
                            </div>
                        </div>

                    </div>
                </div>




            </div>

            <hr>

            </div>
            <!-- /container -->

        </main>

        <footer class="container">
            <p>&copy; Company 2017-2020</p>
        </footer>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script>
            window.jQuery || document.write('<script src="../assets/js/vendor/jquery.slim.min.js"><\/script>')
        </script>
        <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

    </html>