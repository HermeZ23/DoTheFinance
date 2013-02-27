<?php 

require_once("../definitions.php");

$db = mysql_connect (DBPATH,DBUSER, DBPASS);
mysql_select_db(DB, $db);

$query = mysql_query("INSERT INTO ".DBPREFIX."categories (name) VALUES ('".$_POST['name']."')");
$result = mysql_fetch_row($query);
mysql_close($db);


?>
