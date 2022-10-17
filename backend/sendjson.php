require_once 'database_connect.php';
 
 $query = "SELECT * FROM tbl_users";
 
 $stmt = $DBcon->prepare($query);
 $stmt->execute();
 
 $userData = array();
 
 while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
  
  $userData['AllUsers'][] = $row;
 }
 
 echo json_encode($userData);