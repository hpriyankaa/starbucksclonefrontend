//popup contact form

//validating all fields
function input_fields(){
	if(document.getElementById('name').value==""||document.getElementById('email').value==""||document.getElementById('msg').value=="")
		alert("Fill all the options");
	else{
		document.getElementById('form').submit();
		alert("Received the message! Will ping you shortly!");
	}
}
//display contact form
function show_form(){
	document.getElementById('MessageBox').style.display = "block";
}

//close contact form
function close_form(){
	document.getElementById('MessageBox').style.display = "none";						
}

