<?php 

require_once("definitions.php");

  $db = mysql_connect (DBPATH,DBUSER, DBPASS);
  mysql_select_db(DB, $db);

  $query = mysql_query("select count(id) from ".DBPREFIX."user where name='admin' and email='admin'");
  $result = mysql_fetch_row($query);
	print_r($result);

?>
