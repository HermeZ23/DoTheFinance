<?php 

//TODO feedback to JS

require_once("../definitions.php");

session_start();

if($_SESSION['name']){
	
	$db = mysql_connect (DBPATH,DBUSER, DBPASS);
	mysql_select_db(DB, $db);

	$query = mysql_query("SELECT * FROM ".DBPREFIX."balance ORDER BY ID DESC LIMIT 1;");

	$rows = array();
	while($r = mysql_fetch_assoc($query)) {
		  $rows[] = $r;
	}
	print json_encode($rows);

	mysql_close($db);
	
}else{
	echo "please log in first!";
}


?>
