
var session = new Array();
	
$(document).ready(function() {

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


});
