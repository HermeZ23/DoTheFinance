
function buildHome(){
	formCreateUser();
}

function formCreateUser(){
		
	$('#expenses').html(session['admin']);
	$('#expenses').append('<form name="input" action="html_form_action.asp" method="get">');
	$('#expenses').append('Username: <input type="text" id="nameCreateUser" name="user"><br>');
	$('#expenses').append('Admin: <input type="checkbox" id="adminCreateUser" name="admin" value="admin">Admin Permissions<br>');
	$('#expenses').append('Accountant: <input type="checkbox" id="accountantCreateUser" name="accountant" value="accountant">Accountant Permissions<br>');
	$('#expenses').append('Active: <input type="checkbox" id="activeCreateUser" name="active" value="active">User is active<br>');
	$('#expenses').append('<input type="submit" id="submitCreateUser" value="Submit">');
	$('#expenses').append('</form>');





}
