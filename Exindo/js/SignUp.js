function validateForm(theForm){	
	var valUsername = validateUsername(theForm.username);
	var valPassword = validatePassword(theForm.password);
	var valConfirmPassword = validateSamePassword(theForm.password, theForm.confpass);
	var valFName = validateFirstName(theForm.firstname);
	var valLName = validateLastName(theForm.lastname);
	var valAge = validateAge(theForm.age);
	var valPhone = validatePhone(theForm.phone);
	var valEmail = validateEmail(theForm.email);
	
	if(valUsername && valPassword && valConfirmPassword && valFName && valLName && valAge && valPhone && valEmail){ 
			$.ajax({
				type:"POST",
				url:"sign_up.php",
				data:{"username":theForm.username.value, "password":theForm.password.value, "firstname":theForm.firstname.value, "lastname":theForm.lastname.value, "age":theForm.age.value, "phone":theForm.phone.value, "email":theForm.email.value},
				dataType: "json",
				success: function(response){
					alert(response);
				}
			});
	}
}

function validateUsername(field) {
	var illegalChars = /\W/; // allow letters, numbers, and underscores
 
	if (field.value == "") {
		field.style.background = 'Yellow'; 
		document.getElementById("errorUsername").innerHTML = "You didn't enter a username";
		return false;
	} else if (field.value.length < 5) {
		field.style.background = 'Yellow'; 
		document.getElementById("errorUsername").innerHTML = "The length for username is too short";
		return false;
	} else if (field.value.length > 15) {
		field.style.background = 'Yellow'; 
		document.getElementById("errorUsername").innerHTML = "The length for username is too long";
		return false;
	} else if (illegalChars.test(field.value)) {
		field.style.background = 'Yellow'; 
		document.getElementById("errorUsername").innerHTML = "The username contains illegal characters";
		return false;
	} else {
		field.style.background = 'White';
		document.getElementById("errorUsername").innerHTML = "";
		return true;
	} 
}

function validatePassword(field) {					
	var illegalChars = /[\W_]/; // allow only letters and numbers 
 
	if (field.value == "") {
		field.style.background = 'Yellow';
		document.getElementById("errorPassword").innerHTML = "You didn't enter a password";
		return false;
	} else if (field.value.length < 7) {
		document.getElementById("errorPassword").innerHTML = "The length for password is too short";
		field.style.background = 'Yellow';
		return false;
	} else if (field.value.length > 20) {
		document.getElementById("errorPassword").innerHTML = "The length for password is too long";
		field.style.background = 'Yellow';
		return false;
	} else if (illegalChars.test(field.value)) {
		document.getElementById("errorPassword").innerHTML = "The password contains illegal characters";
		field.style.background = 'Yellow';
		return false;
	} else {
		field.style.background = 'White';
		document.getElementById("errorPassword").innerHTML = "";
		return true;
	}
}

function validateSamePassword(pass,conf) {
	if (conf.value == "") {
		conf.style.background = 'Yellow';
		document.getElementById("errorConfirmPassword").innerHTML = "You didn't enter a confirm password";
		return false;
	} 
	else if (pass.value != conf.value) {
		document.getElementById("errorConfirmPassword").innerHTML = "The confirm password must be same with the password";
		conf.style.background = 'Yellow';
		return false;
	}
	else { 
		conf.style.background = 'White';
		document.getElementById("errorConfirmPassword").innerHTML = "";
		return true;
	}
}

function validateFirstName(field){
	var illegalChars = /[0-9]/;	
	  
	if (field.value == "") {
		field.style.background = 'Yellow'; 
		document.getElementById("errorFirstName").innerHTML = "You didn't enter your first name"
		return false;
	} else if (illegalChars.test(field.value)) {
		document.getElementById("errorFirstName").innerHTML = "The name contains illegal characters";
		field.style.background = 'Yellow';
		return false;
	} else {
		field.style.background = 'White';
		document.getElementById("errorFirstName").innerHTML = "";
		return true;
	}
}

function validateLastName(field){
	var illegalChars = /[0-9]/;
					  
	if (field.value == "") {
		field.style.background = 'Yellow'; 
		document.getElementById("errorLastName").innerHTML = "You didn't enter your last name"
		return false;
	} else if (illegalChars.test(field.value)) {
		document.getElementById("errorLastName").innerHTML = "The name contains illegal characters";
		field.style.background = 'Yellow';
		return false;
	} else {
		field.style.background = 'White';
		document.getElementById("errorLastName").innerHTML = "";
		return true;
	}
}

function validateAge(field){
	var illegalChars = /[a-zA-Z]/;
	
	if(field.value == ""){
		field.style.background = 'Yellow';
		document.getElementById("errorAge").innerHTML = "You didn't enter your age";
		return false;
	} else if (illegalChars.test(field.value)) {
		document.getElementById("errorAge").innerHTML = "The age contains illegal characters";
		field.style.background = 'Yellow';
		return false;
	} else{
		field.style.background = 'White';
		document.getElementById("errorAge").innerHTML = "";
		return true;
	}
}

function validatePhone(field){
	var stripped = field.value.replace(/[\(\)\.\-\ ]/g, '');     

	if (field.value == "") {
		document.getElementById("errorPhone").innerHTML = "You didn't enter a phone number";
		field.style.background = 'Yellow';
		return false;
	} else if (isNaN(parseInt(stripped))) {
		document.getElementById("errorPhone").innerHTML = "The phone number contains illegal characters";
		field.style.background = 'Yellow';
		return false;
	} else if (stripped.length > 10) {
		document.getElementById("errorPhone").innerHTML = "The phone number exceeds the length limit";
		field.style.background = 'Yellow';
		return false;
	} else{
		field.style.background = 'White';
		document.getElementById("errorPhone").innerHTML = "";
		return true;
	}
}

function validateEmail(field){
	var atPos = field.value.indexOf("@");
	var dotPos = field.value.lastIndexOf(".");
	var valid = (atPos > 0) && (dotPos > atPos + 1) && (field.value.length > dotPos + 2);
	var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/ ;
	
	if (field.value == "") {
		field.style.background = 'Yellow';
		document.getElementById("errorEmail").innerHTML = "You didn't enter an email address";
		return false;
	} else if (!valid) {
		field.style.background = 'Yellow';
		document.getElementById("errorEmail").innerHTML = "Please enter a valid email address";
		return false;
	} else if (field.value.match(illegalChars)) {
		field.style.background = 'Yellow';
		document.getElementById("errorEmail").innerHTML = "The email address contains illegal characters";
		return false;
	} else {
		field.style.background = 'White';
		document.getElementById("errorEmail").innerHTML = "";
		return true;
	}
}