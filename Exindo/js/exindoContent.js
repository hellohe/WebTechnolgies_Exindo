// JavaScript Document
var loggedin;
$(document).ready(function() {
	//initialize menu
	cbpHorizontalMenu.init();
	
	//search for cookie
	var allCookie = document.cookie.split(";");
	var name;
	var pass;
	for(var i = 0;i < allCookie.length; i++){
		if(allCookie[i].split("=")[0].replace(/^\s+|\s+$/g,'') == "name"){
			name = allCookie[i].split("=")[1];
		}
		if(allCookie[i].split("=")[0].replace(/^\s+|\s+$/g,'') == "pass"){
			pass = allCookie[i].split("=")[1];
		}
	}
	//automatic login if cookie is available
	if(name != null && pass != null){
		$.ajax({
			type:"POST",
			url:"checklogin.php",
			data:{"memberUsername":name, "memberPassword":pass},
			dataType: "json"
		});
	}
	
	//check whether the user is logged in
	loggedin = CheckUserLoggedIn();
	if(loggedin != false){
		document.getElementById('statusbox').innerHTML = 'Welcome, ' + loggedin + ' | <a href="#" onclick="signout()">LOGOUT</a>';
	}
	else{
		var allPrevVote = document.getElementsByClassName('prev_vote');
		for (var i = 0; i < allPrevVote.length; i++) {
			var lbl = allPrevVote[i];
			lbl.innerHTML = "<strong>Login to vote</strong>";
		}
	}
	
	//rating system javascript
	//get values fromm database for every rating widget
	$('.rate_widget').each(function(i) {
		var widget = this;
		
		//checks for cookie
		var isPresent = false;
		var ratingStar;
		var allCookie = document.cookie.split(";");
		for(var i = 0;i < allCookie.length; i++){
			if(allCookie[i].split("=")[0].replace(/^\s+|\s+$/g,'') == $(widget).attr('id')){
				isPresent = true;
				ratingStar = allCookie[i].split("=")[1];
			}
		}
		
		var out_data = {
			widget_id : $(widget).attr('id'),
			fetch: 1
		};
		
		$.post(
			'RatingSystem.php',
			out_data,
			function(response) {
				$(widget).data( 'fsr', response );
				set_votes(widget, isPresent, ratingStar);
			},
			'json'
		);
		
	});
	
	//change star on hover
	$('.ratings_stars').hover(
		// mouseover
		function() {
			$(this).prevAll().andSelf().addClass('ratings_over');
			$(this).nextAll().removeClass('ratings_vote');
		},
		// mouseout
		function() {
			$(this).prevAll().andSelf().removeClass('ratings_over');
			set_votes($(this).parent());
		}
	);
	
	//send the vote to database only when cookie is not present (user has not vote)
	$('.ratings_stars').bind('click', function() {
		var star = this;
		var widget = $(this).parent();
		
		//checks for cookie
		var isPresent = false;
		var allCookie = document.cookie.split(";");
		for(var i = 0;i < allCookie.length; i++){
			if(allCookie[i].split("=")[0].replace(/^\s+|\s+$/g,'') == $(star).parent().attr('id')){
				isPresent = true;
				break;
			}
		}
		
		alert(loggedin);
		if(loggedin != false && !isPresent){
			var clicked_data = {
				clicked_on : $(star).attr('class'),
				widget_id : $(star).parent().attr('id')
			};
			$.post(
				'RatingSystem.php',
				clicked_data,
				function(response) {
					widget.data( 'fsr', response );
					set_votes(widget, true, response.submitted_value);
					
					//create cookie
					var expireDate = new Date();
					expireDate.setDate(expireDate.getFullYear() + 3);
					document.cookie = $(star).parent().attr('id') + "=" + response.submitted_value + ";expires=" + expireDate.toGMTString();
				},
				'json'
			);
		}
	});
	
	//jquery eventhandler for sign in
	$('a.signin').click(function() {
		// Getting the variable's value from a link and show
		var loginBox = $(this).attr('href');
		$(loginBox).fadeIn(500);
		
		//position
		var popMargTop = ($(loginBox).height() + 24) / 2; 
		var popMargLeft = ($(loginBox).width() + 24) / 2; 
		
		$(loginBox).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		
		// Add the mask to body
		$('body').append('<div id="mask"></div>');
		$('#mask').fadeIn(500);
		
		return false;
	});
	
	//closing modal login box
	$('a.close, #mask').on('click', function() { 
		$('#mask , .loginpopup').fadeOut(500 , function() {
			$('#mask').remove();  
		}); 
		document.getElementsByClassName('warningtxt')[0].style.display = 'none';
		return false;
	});
});

function configHCB(){
	if(loggedin != false){
		var nameinput = document.getElementById('hcb_form_name');
		nameinput.value = loggedin;
		nameinput.type = "hidden";
		$('#hcb_submit').click(function(){
			location.reload();
		});
		document.getElementById('HCB_comment_box').style.display = 'block';
	}
	else{
		document.getElementById('HCB_comment_box').style.display = 'none';
		document.getElementById('commentSection').innerHTML = "<strong>Please login to comment on this article</strong>";
	}
}