//this is where the contact form submits
$(document).ready(function() {
	//make sure the success message is hidden
	$("#succs-msg").hide();

    	$("#submit").click(function() {	
		//validate
		var name = $("#send-form-name").val();
        	var email = $("#send-form-email").val();
        	var subject = $("#send-form-select").val();
        	var message = $("#send-form-message").val();
		//we should not get to here, but in the event we do, do not send
		if (name == '' || email == '' || subject == '' || message == '') {
			//add js to update UI rather than pop up
            		alert("Please Fill Required Fields");
        	} 
        	else {
			//put together the string to send the Perl script
			var dataString = 'name='+ name + '&email=' + email + '&subject=' + subject + '&message=' + message;
  			$.ajax({
    			type: "POST",
    			url: "http://woddrive.com/cgi-bin/contactForm.pl",
    			data: dataString,
    				success: function() {
				 //if the script returns a 200 show the message and result the form
				 $("#succs-msg").show()
				 $("#send-form")[0].reset();
    				}
  			});
  			return false;
        	}
    	});
  });
