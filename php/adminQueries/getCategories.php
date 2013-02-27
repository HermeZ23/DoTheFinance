<?php 

//TODO feedback to JS

require_once("../definitions.php");

session_start();

if($_SESSION['admin'] == "1"){
	
	$db = mysql_connect (DBPATH,DBUSER, DBPASS);
	mysql_select_db(DB, $db);

	$query = mysql_query("SELECT * FROM ".DBPREFIX."categories ");

	$rows = array();
	while($r = mysql_fetch_assoc($query)) {
		  $rows[] = $r;
	}
	print json_encode($rows);

	mysql_close($db);
	
}


?>
