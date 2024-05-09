<?php
session_start();
if (isset($_SESSION["user"])){
    header(
        "location:login.php"
    );
}
?>
<!doctype html>
<html>
    <head>home</head>
    <body>
        <a href="logout.php">logout</a><br/><br/><br/>
        <h1>welcome to login page</h1>
    </body>
</html>