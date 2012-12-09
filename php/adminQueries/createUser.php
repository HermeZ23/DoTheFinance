<?php 

require_once("../definitions.php");

function saltPw($password, $salt)
{
     return hash('sha256', $password . $salt);
}

$salt = rand(10000, 9999999);
$password = $_POST['password'];
$saltedHash = saltPw($password, $salt);

$name = $_POST['name'];
$email = $_POST['email'];
$isAdmin = $_POST['isAdmin'];
$isAccountant = $_POST['isAccountant'];
$isActive = $_POST['isActive'];

$db = mysql_connect (DBPATH,DBUSER, DBPASS);
mysql_select_db(DB, $db);

$query = mysql_query("INSERT INTO ".DBPREFIX."pass (userName,pass,salt) VALUES ('".$name."', '".$saltedHash."',".$salt.")");
$result = mysql_fetch_row($query);

$query = mysql_query("INSERT INTO ".DBPREFIX."user (name,email,isAdmin,isAccountant,isActive) VALUES ('".$name."','".$email."',".$isAdmin.",".$isAccountant.",".$isActive.")");
$result = mysql_fetch_row($query);
mysql_close($db);
	
?>


