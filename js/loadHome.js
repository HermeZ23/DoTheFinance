
function buildHome(){
	formCreateUser();
}

function formCreateUser(){
		
	$('#expenses').html('<form id="createUser">Username: <input type="text" id="nameCreateUser" name="user"></input><br>Email: <input type="text" id="emailCreateUser" name="email"><br>Password: <input type="password" id="passwordCreateUser" name="pwd"><br>Retype: <input type="password" id="retypeCreateUser" name="retype"><br>Admin: <input type="checkbox" id="adminCreateUser" name="admin" value="admin">Admin Permissions<br>Accountant: <input type="checkbox" id="accountantCreateUser" name="accountant" value="accountant">Accountant Permissions<br>Active: <input type="checkbox" id="activeCreateUser" name="active" value="active">User is active<br><input type="button" id="submitCreateUser" value="Submit"></form>');



	$("#submitCreateUser").click(function(e) {
		if($('#passwordCreateUser').val() != $('#retypeCreateUser').val()){
			alert("Passwords differ");
		}else{
			postData = $('#createUser').serialize();
			$.post('php/adminQueries/createUser.php', postData , function(data) {
				alert(data);
			});
		}	
	});

}
