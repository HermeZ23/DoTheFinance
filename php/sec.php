<?PHP

require_once("definitions.php");

if((isset($_POST['username'], $_POST['password']))) {
  extract($_POST);

  $db = mysql_connect (DBPATH,DBUSER, DBPASS);
  mysql_select_db(DB, $db);

  $query = mysql_query("select count(id) from ".DBPREFIX."user where name='".$username."' and email='".$password."'");
  $result = mysql_fetch_row($query);
  if($result[0] == 1) {
    session_start();
    $_SESSION['username'] = $username;
    die("<success />");
  }else 
		die("<error id='2' />");
}

?>
