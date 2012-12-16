
function logout(){
	$.post('php/logout.php' , function(data) {
		window.location.reload();		
	});
}

function buildHome(){
	
	if(session['admin']){
		formCreateUser();
		listUser();
	}
	if(session['accountant']){

	}
	
}

function formCreateUser(){
		
	$('#expenses').html('<form id="createUser">Username: <input type="text" id="nameCreateUser" name="user"></input><br>Email: <input type="text" id="emailCreateUser" name="email"><br>Password: <input type="password" id="passwordCreateUser" name="pwd"><br>Retype: <input type="password" id="retypeCreateUser" name="retype"><br>Admin: <input type="checkbox" id="adminCreateUser" name="admin" value="admin">Admin Permissions<br>Accountant: <input type="checkbox" id="accountantCreateUser" name="accountant" value="accountant">Accountant Permissions<br>Active: <input type="checkbox" id="activeCreateUser" name="active" value="active">User is active<br><input type="button" id="submitCreateUser" value="Submit"></form>');

	$("#submitCreateUser").click(function(e) {
		if($('#passwordCreateUser').val() != $('#retypeCreateUser').val()){
			alert("Passwords differ");
		}else{
			postData = $('#createUser').serialize();
			$.post('php/adminQueries/createUser.php', postData , function(data) {

			});
		}	
	});

}

function listUser(){
	var users = [];
	$.post('php/adminQueries/getUser.php', "?ds=d" , function(data) {
			users = jQuery.parseJSON(data);
			
			var text = '<table border="0" id="users"> <tr> <th>Name</th> <th>Active</th> <th>Admin</th> <th>Accountant</th> ';		
			$.each(users , function(index, user){
				text += '<tr> <td>'+user['name']+'</td> <td><center>'+user['isActive']+'</center></td> <td><center>'+user['isAdmin']+'</center></td> <td><center>'+user['isAccountant']+'</center></td></tr>';	
			});

			text += '</table>';	
			$('#account').html(text);
			
	});

}



