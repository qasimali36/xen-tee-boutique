<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <?php
        $conn = new mysqli("localhost","root","","");
        if ($conn) {
            echo"Connected to server";
           if( $conn->query("CREATE DATABASE Clothing")==true){
            echo('Database created'.'<br>');
           }
        }

        ?>
    </body>
</html>