<?php
	$host = "localhost";
	$username = "root";
	$password = "";
	$dbName = "exindo";
	$tableName = "rating";
	$articletitle = $_POST['widget_id'];
	
	//connect
	mysql_connect("$host", "$username", "$password") or die("cannot connect");
	mysql_select_db("$dbName") or die("cannot select db");

	isset($_POST['fetch']) ? get_ratings($tableName, $articletitle) : vote($tableName, $articletitle);
	
	function get_ratings($tableName, $articletitle){
		$sqlquery = "select * from $tableName where ArticleTitle = '$articletitle'";
		$result = mysql_query($sqlquery);
		
		$count = mysql_num_rows($result);
		if($count == 1){
			$row = mysql_fetch_array($result);
			$data = array(
				"widget_id" => $row['ArticleTitle'],
				"number_votes" => $row['TotalVotes'],
				"dec_avg" => $row['AvgVote']
			);
			echo json_encode($data);
		}
		else{
			$data = array(
				"widget_id" => $articletitle,
				"number_votes" => 0,
				"dec_avg" => 0
			);
			echo json_encode($data);
		}
	}
	
	function vote($tableName, $articletitle){
		preg_match('/star_([1-5]{1})/', $_POST['clicked_on'], $match);
		//$match[1] now contains the rating number (1-5)
		
		$sqlquery = "select * from $tableName where ArticleTitle = '$articletitle'";
		$result = mysql_query($sqlquery);
		
		$count = mysql_num_rows($result);
		if($count == 1){
			$row = mysql_fetch_array($result);
			$totalpoints = $row['TotalPoints'];
			$totalvote = $row['TotalVotes'];
			
			//update values and update database
			$totalpoints += $match[1];
			$totalvote += 1;
			$newavg = calcAvg($totalpoints, $totalvote);
			
			$sqlupdate = "UPDATE $tableName SET TotalVotes=$totalvote, TotalPoints=$totalpoints, AvgVote=$newavg WHERE ArticleTitle='$articletitle'";
			mysql_query($sqlupdate);
			
			$data = array(
				"widget_id" => $articletitle,
				"number_votes" => $totalvote,
				"dec_avg" => $newavg,
				"submitted_value" => $match[1]
			);
			echo json_encode($data);
		}
		else{
			//insert new record to database
			$avg = calcAvg($match[1], 1);
			$sqlinsert = "insert into $tableName values ('$articletitle', 1, $match[1], $avg)";
			mysql_query($sqlinsert);
			
			$data = array(
				"widget_id" => $articletitle,
				"number_votes" => 1,
				"dec_avg" => $avg,
				"submitted_value" => $match[1]
			);
			echo json_encode($data);
		}
		
		
	}
	
	function calcAvg($totalP, $totalV){
		return round(($totalP/$totalV), 2);
	}
?>