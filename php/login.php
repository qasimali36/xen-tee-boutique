<!DOCTYPE html>
<html>
    <body>
        <form method = "post" action = "login.php"/>
        <input type= "text" name = "user"/>
        <input type= "text" name = "pwd"/>
        <input type= "submit" name = "sub"/> 
        </form>
        
    </body>
    
</html>
<?php
if(isset($_POST["sub"])){
    $user = $_POST["user"];
    $pwd = $_POST["pwd"];
    if(($user == "abc")&&($pwd = '123')){

        $_SESSION['user'] = $user;
        header('location:home.php');
}
}
?>
