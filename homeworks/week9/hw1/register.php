<?php

require_once('conn.php');

?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Jekyll v4.1.1">
    <title>Floating labels example · Bootstrap</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/4.5/examples/floating-labels/">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

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
    <link href="floating-labels.css" rel="stylesheet">
  </head>
  <body>

  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  

            <a class="navbar-brand" href="comment.php">留言板</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="comment.php">Home</a>
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
                
                    <a href="register.php">
                    <button class="ml-4 btn btn-outline-success my-2 my-sm-0">會員註冊</button>
                    </a>
                    
            
                    <a href="login.php">
                    <button class="ml-4 btn btn-outline-success my-2 my-sm-0" >登入</button>
                    </a>
                    
                </form>
            </div>
        </nav>



    <form  method="POST" action="handle_register.php" class="form-signin">
  <div class="text-center mb-4">
    <img class="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
    <h1 class="h3 mb-3 font-weight-normal">Welcome,註冊</h1>
    <p>請填寫以下資訊</p>
    <?php

                if(!empty($_GET['errCode'])){
                    // 第一種方法，缺點是直接改網址列就可以更改網頁內容
                    // $msg = $_GET['errMsg'];
                    // echo "<h2>".$msg."</h2>";
                    // 第二種方法 
                    $code=$_GET['errCode'];
                    $msg = 'Error';
                    if($code ==='2'){
                        
                     $msg ="此E-mail已有人註冊";
                    }

                    echo "<div class='alert alert-danger alert-dismissible fade show text' role='alert'>
                    <strong>".$msg."</strong> 
                </div>";
                }

            ?>
  </div>

  <div class="form-label-group">
    <input type="nickname" name='nickname' id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
    <label for="text">暱稱</label>
  </div>
  <div class="form-label-group">
    <input type="mail" name='mail' id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
    <label for="text">E-mail</label>
  </div>

  <div class="form-label-group">
    <input name='password' type="password" id="inputPassword" class="form-control" placeholder="Password" required>
    <label for="inputPassword">Password</label>
  </div>

  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit">Register now</button>
  <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2020</p>
</form>
</body>
</html>
