// JavaScript Document
function signin(){
	var memberusername = document.getElementById('username').value;
	var memberpassword = document.getElementById('password').value;
	
	$.ajax({
		type:"POST",
		url:"checklogin.php",
		data:{"memberUsername":memberusername, "memberPassword":memberpassword},
		dataType: "json",
		success: function(response){
			if(response == "empty"){
				document.getElementsByClassName('warningtxt')[0].style.display = "block";
				document.getElementById('username').value = "";
				document.getElementById('password').value = "";
			}
			else{
				//close the login popup box
				$('#mask , .loginpopup').fadeOut(500 , function() {
					$('#mask').remove();
				});
				document.getElementById('statusbox').innerHTML = 'Welcome, ' + response[0] + ' | <a href="#" onclick="signout()">LOGOUT</a>';
				if(document.getElementsByClassName('remember')[0].checked){
					var expireDate = new Date();
					expireDate.setDate(expireDate.getDate() + 13);
					document.cookie = "name="+response[0]+";expires=" + expireDate.toGMTString();
					document.cookie = "pass="+response[1]+";expires=" + expireDate.toGMTString();
				}
			}
		}
	});
}

function signout(){
	$.ajax({
		url:"logout.php",
		type:"post",
		success:function(){
			//delete cookie and reload
			document.cookie ='name=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
			document.cookie =' pass=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
			location.reload();
		}
	});
}

//check whether the user is logged in
function CheckUserLoggedIn(){
	var loggedin;
	$.ajax({
		type:"POST",
		url:"CheckUserLoggedIn.php",
		async:false,
		success: function(response){
			if(response != "empty"){
				loggedin = response;
			}
			else{
				loggedin = false;
			}
		}
	});
	return loggedin;
}