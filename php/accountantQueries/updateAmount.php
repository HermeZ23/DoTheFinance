<?php 

//TODO feedback to JS

require_once("../definitions.php");

session_start();

if($_SESSION['accountant'] == "1"){

	$amount = $_POST['amount'];

	$db = mysql_connect (DBPATH,DBUSER, DBPASS);
	mysql_select_db(DB, $db);

	$query = mysql_query("INSERT INTO ".DBPREFIX."balance (date,amount) VALUES ( now(), ".$amount.")");
	$result = mysql_fetch_row($query);

	mysql_close($db);
	
}

?>