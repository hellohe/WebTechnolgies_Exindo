<?php
$host = "localhost";
$username = "root";
$password = "";
$dbName = "exindo";
$tableName = "registration";

//connect
mysql_connect("$host", "$username", "$password") or die("cannot connect");
mysql_select_db("$dbName") or die("cannot select db");

$memberUsername = $_POST['memberUsername'];
$memberPassword = $_POST['memberPassword'];

//mysql injection
$memberUsername = stripslashes($memberUsername);
$memberPassword = stripslashes($memberPassword);
$memberUsername = mysql_real_escape_string($memberUsername);
$memberPassword = mysql_real_escape_string($memberPassword);

$sqlquery = "select * from $tableName where username = '$memberUsername' and password = '$memberPassword'";
$result = mysql_query($sqlquery);

$count = mysql_num_rows($result);
if($count == 1){
	session_start();
	$_SESSION['username'] = $memberUsername;
	$_SESSION['password'] = $memberPassword;
	//header("location: loginSuccessful.php");
	echo json_encode(array_values(array($memberUsername, $memberPassword)));
}
else{
	echo json_encode("empty");	
}
?>