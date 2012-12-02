<?php 

require_once("definitions.php");

echo DBPATH;
$connection = mysql_connect (DBPATH,DBUSER, DBPASS)
or die ("No connection possible!". mysql_error() );

mysql_select_db(DB) or die ("No database found.");

?>
