<?php 

$dbconn = mysqli_connect("localhost","root","","quickgroceries");

// Check connection 
if(!$dbconn){
    die("Error in establishing database!" . mysqli_connect_error());
}


