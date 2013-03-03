<?php 

//TODO feedback to JS

require_once("../definitions.php");

session_start();

if($_SESSION['admin'] == "1"){

	$name = $_POST['user'];
	$email = $_POST['lease'];

	$db = mysql_connect (DBPATH,DBUSER, DBPASS);
	mysql_select_db(DB, $db);

	$query = mysql_query("INSERT INTO ".DBPREFIX."user (name,email,isAdmin,isAccountant,isActive) VALUES ('".$name."','".$email."',".$isAdmin.",".$isAccountant.",".$isActive.")");
	$result = mysql_fetch_row($query);

	mysql_close($db);
	
}

?>