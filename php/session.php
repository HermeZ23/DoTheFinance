<?php
session_start(); 
//$script = '<script>var session = new Array('.$_SESSION['name'].','.$_SESSION['email'].','.$_SESSION['admin'].','.$_SESSION['accountant'].');</script>';
echo json_encode($_SESSION);;
?>
