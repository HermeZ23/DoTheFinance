<?php 

//TODO feedback to JS

require_once("../definitions.php");

function saltPw($password, $salt){
     return hash('sha256', $password . $salt);
}

$salt = rand(10000, 9999999);
$password = $_POST['pwd'];
$saltedHash = saltPw($password, $salt);



$name = $_POST['user'];
$email = $_POST['email'];
if($_POST['admin'] == "admin"){
	$isAdmin = 1;
}else{
	$isAdmin = 0;
}
if($_POST['accountant'] == "accountant"){
	$isAccountant = 1;
}else{
	$isAccountant = 0;
}
if($_POST['active'] == "active"){
	$isActive = 1;
}else{
	$isActive = 0;
}

$db = mysql_connect (DBPATH,DBUSER, DBPASS);
mysql_select_db(DB, $db);




$query = mysql_query("INSERT INTO ".DBPREFIX."pass (userName,pass,salt) VALUES ('".$name."', '".$saltedHash."',".$salt.")");
$result = mysql_fetch_row($query);



$query = mysql_query("INSERT INTO ".DBPREFIX."user (name,email,isAdmin,isAccountant,isActive) VALUES ('".$name."','".$email."',".$isAdmin.",".$isAccountant.",".$isActive.")");
$result = mysql_fetch_row($query);
mysql_close($db);
	


?>


