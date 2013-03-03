
var session = new Array();


$(document).ready(function() {

	//get PHP Session Variable
	$.post('php/session.php', $('#mainform').serialize() 
        +'&action='+ 'Login', function(sessionTmp) {
			session = JSON.parse(sessionTmp);	
	});	

	if(typeof session['name'] == 'undefined' ){//check if already logged in
		$("#register, #login").click(function(e) {
		  $('#message').slideUp('fast');

		  $.post('php/sec.php', $('#mainform').serialize() 
		      +'&action='+ 'Login', function(data) {
		    var code = $(data)[0].nodeName.toLowerCase();

		    $('#message').removeClass('error');
		    $('#message').removeClass('success');
		    $('#message').addClass(code);
		    if(code == 'success') {
		      $('#message').html('Login was successful.');
					$('#message').append('<input type="button" id="logout" value="logout">');
					$('#logout').click(function(e) {
						logout();
					});
					buildHome();	
		    }
		    else if(code == 'error') {
		      $('#message').html('An error occurred, please try again.');
		    }
		    $('#message').slideDown('fast');
		  });
		  $.post('php/session.php', $('#mainform').serialize() 
		      +'&action='+ 'Login', function(sessionTmp) {
					session = JSON.parse(sessionTmp);	
			});

		  return e.preventDefault();
		});
	}else{//if already logged in
		$('#message').html('Logged in as '+session['name']);
		$('#message').append('<input type="button" id="logout" value="logout">');
		$('#logout').click(function(e) {
			logout();
		});
		buildHome();	
	}


});
