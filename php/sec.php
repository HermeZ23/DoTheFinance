<?PHP

require_once("definitions.php");


if((isset($_POST['username'], $_POST['password']))) {
  extract($_POST);

  $db = mysql_connect (DBPATH,DBUSER, DBPASS);
  mysql_select_db(DB, $db);

  $query = mysql_query("select count(id) from ".DBPREFIX."user where name='".$username."' and email='".$password."'");
  $result = mysql_fetch_row($query);
  if($result[0] == 1) {
		$query = mysql_query("select * from ".DBPREFIX."user where name='".$username."'");
  	$result = mysql_fetch_row($query);
	  if(ord($result[5]) == 0 )  
			die("<error id='1' />");		
		session_start();
    $_SESSION['name'] = $username;
		$_SESSION['email'] = $result[2];
		$_SESSION['admin'] = $result[3];
		$_SESSION['accountant'] = $result[4];
    die("<success />");
  }else 
		die("<error id='2' />");
}

?>
