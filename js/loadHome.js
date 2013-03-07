
function logout(){
	$.post('php/logout.php' , function(data) {
		window.location.reload();		
	});
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

function buildHome(){
	buildAmount();
	buildInfo();

	if(session['admin']==1){
		formCreateUser();
		listUser();
		formCreateCategory();
		listCategories();
		alert("dd");
	}
	if(session['accountant']==1){
		formSetLease();
		formUpdateAmount();
	}
	
}

function buildAmount(){
	var amount = 0;
	$.post('php/userQueries/getAmount.php', "?ds=d" , function(data) {
			amounts = jQuery.parseJSON(data);
			$.each(amounts , function(index, sum){
				amount = sum['amount'];
			});	
			$('#balance').html('Kontostand: '+amount +"€");
	});
}

//------------------------------------------------------------------------------------------------------------------------------------------------------

function buildInfo(){
	$('#info').html('info');
}

//###################################################### ADMIN ##################################################################################
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

function formCreateUser(){
		
	$('#data').prepend('<div class="big">Benutzer anlegen<form id="createUser">Username: <input type="text" id="nameCreateUser" name="user"></input><br>Email: <input type="text" id="emailCreateUser" name="email"><br>Password: <input type="password" id="passwordCreateUser" name="pwd"><br>Retype: <input type="password" id="retypeCreateUser" name="retype"><br>	Admin: <input type="checkbox" id="adminCreateUser" name="admin" value="admin">Admin Permissions<br>Accountant: <input type="checkbox" id="accountantCreateUser" name="accountant" value="accountant">Accountant Permissions<br>Active: <input type="checkbox" id="activeCreateUser" name="active" value="active">User is active<br>	<input type="button" id="submitCreateUser" value="Submit"></form></div>');

	$("#submitCreateUser").click(function(e) {
		if($('#passwordCreateUser').val() != $('#retypeCreateUser').val()){
			alert("Passwords differ");
		}else{
			postData = $('#createUser').serialize();
			$.post('php/adminQueries/createUser.php', postData , function(data) {
				$('#createUser')[0].reset();
				listUser();
			});
		}	
	});

}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

function listUser(){
	var users = [];
	$.post('php/adminQueries/getUser.php', "?ds=d" , function(data) {
			users = jQuery.parseJSON(data);
			var text = '<div class="small">Benutzer<table border="0" id="users"> <tr> <th>Name</th> <th>Active</th> <th>Admin</th> <th>Accountant</th> ';		
			$.each(users , function(index, user){
				text += '<tr> <td>'+user['name']+'</td> <td><center>'+user['isActive']+'</center></td> <td><center>'+user['isAdmin']+'</center></td> <td><center>'+user['isAccountant']+'</center></td></tr>';	
			});
			text += '</table></div>';	
			$('#dataSmall').prepend(text);
	});
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

function formCreateCategory(){
	$('#data').prepend('<div class="big">Kategorie erstellen <form id="createCategory">Name: <input type="text" id="nameCreateCategory" name="name"></input><br><input type="button" id="submitCreateCategory" value="Submit"></form></div>');
	$("#submitCreateCategory").click(function(e) {
		postData = $('#createCategory').serialize();
		$.post('php/adminQueries/createCategory.php', postData , function(data) {
			$('#createCategory')[0].reset();
			listCategories();
		});
	});
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

function listCategories(){
	var users = [];
	$.post('php/adminQueries/getCategories.php', "?ds=d" , function(data) {
		categories = jQuery.parseJSON(data);
		var text = '<div class="small">Kategorien<table border="0" id="categories"> <tr> <th>Name</th>';		
		$.each(categories , function(index, category){
			text += '<tr> <td>'+category['name']+'</td></tr>';	
		});
		text += '</table></div>';	
		$('#dataSmall').prepend(text);
	});
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//###################################################### ACCOUNTANT ##################################################################################

function formSetLease(){
	var users = [];
	$.post('php/adminQueries/getUser.php', "?ds=d" , function(data) {
		users = jQuery.parseJSON(data);
		var text = '<div class="small">Miete festlegen <form id="setLease"><select id="userSetLease" name="userID" size="3">';

		$.each(users , function(index, user){
			text += '<option value="'+user['ID']+'">'+user['name']+'</option>';
		});

		text += '</select><input type="text" id="leaseSetLease" name="lease"></input><br>'; 
		text += '<input type="button" id="submitSetLease" value="Submit"></form> </div>';	
		$('#dataSmall').prepend(text);

		$("#submitSetLease").click(function(e) {
		postData = $('#setLease').serialize();
		$.post('php/accountantQueries/setLease.php', postData , function(data) {
			$('#setLease')[1].reset();
			listCategories();
		});
	});
	});
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------

function formUpdateAmount(){
	$('#dataSmall').prepend('<div class="small">Kontostand aktualisieren <form id="updateAmount">Kontostand: <input type="text" id="amountUpdateAmount" name="amount"></input><br><input type="button" id="submitUpdateAmount" value="Submit"></form></div>');
	$("#submitUpdateAmount").click(function(e) {
		postData = $('#updateAmount').serialize();
		$.post('php/accountantQueries/updateAmount.php', postData , function(data) {
			$('#updateAmount')[0].reset();
			buildAmount();
		});
	});


}
//###################################################### USER ##################################################################################


