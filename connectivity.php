<?php

// Establishing a connection to the database without username and password
$conn = new mysqli('localhost', 'root', '', 'shoeshop');

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query the database
$results = $conn->query('SELECT * FROM shoes');

// Fetch and display the results
while ($row = $results->fetch_assoc()) {
    echo($row['serialno'] .''. $row['Brand'].''.$row['color'].''.$row['size'].'<br>');
}

// Close the database connection
$conn->close();

?>
