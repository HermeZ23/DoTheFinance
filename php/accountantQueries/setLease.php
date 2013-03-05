<?php 

//TODO feedback to JS

require_once("../definitions.php");

session_start();

if($_SESSION['accountant'] == "1"){

	$userID = $_POST['userID'];
	$lease = $_POST['lease'];

	$db = mysql_connect (DBPATH,DBUSER, DBPASS);
	mysql_select_db(DB, $db);

	$query = mysql_query("INSERT INTO ".DBPREFIX."lease (userID,lease) VALUES (".$userID.",".$lease.")");
	$result = mysql_fetch_row($query);

	mysql_close($db);
	
}

?>