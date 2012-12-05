<?php 

require_once("definitions.php");

  $db = mysql_connect (DBPATH,DBUSER, DBPASS);
  mysql_select_db(DB, $db);

  $query = mysql_query("select * from ".DBPREFIX."user where name='admin'");
  $result = mysql_fetch_row($query);
	
	echo ord($result[3]);
	print_r($result);

?>
