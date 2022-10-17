<?php
$DBhost = "qahe287.fotointerior.com";
 $DBuser = "qahe287";
 $DBpass = "BarriosBcn22";
 $DBname = "qahe287";
 
 try{
  
  $DBcon = new PDO("mysql:host=$DBhost;dbname=$DBname",$DBuser,$DBpass);
  $DBcon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
 }catch(PDOException $ex){
  
  die($ex->getMessage());
 }
 ?>