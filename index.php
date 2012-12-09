<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
 <meta http-equiv="Content-Type" content="text/html;charset=utf-8">

<?php
session_start();
?>

<html>

	<head>
		<title>Do The Finance</title>
		
		<link href="css/style.css" type="text/css" rel="stylesheet" /> 

		<script src="js/jquery-1.8.3.min.js" type="text/javascript"></script>
		<script src="js/login.js" type="text/javascript"></script>
		<script src="js/loadHome.js" type="text/javascript"></script>

	</head>
	
	<body>

		<div id="main"> 
			<div id="time">  </div>
			<div id="head">  
				<h1>Do the finance</h1>
			</div>
			<div id="message"><form id="mainform">
	login:<input name="username" type="text" size="15" maxlength="30">
	passw:<input name="password" type="text" size="15" maxlength="30">
	<input type="button" id="login" name="login" value="login"> </form> </div>

			<div id="expenses">  </div>
			<div id="account">  </div>

		</div>

	</body>

</html>

