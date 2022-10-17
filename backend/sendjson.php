<?php
require_once 'database_connect.php';
 
 $query = "SELECT * FROM barrio";
 
 $stmt = $DBcon->prepare($query);
 $stmt->execute();
 
 $userData = array();
 
 while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
  
  $userData['Barrios'][] = $row;
 }
 
 echo json_encode($userData);
 ?>