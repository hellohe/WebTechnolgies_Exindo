function goSearch()
{
	var searchVal = document.getElementById("searchBar").value.toLowerCase();	
	if(searchVal == "aceh"){
		window.location = "Place_Aceh.html";
	}
	else if(searchVal == "north sumatra"){
		window.location = "Place_NorthSumatra.html";
	}
	else if(searchVal == "west sumatra"){
		window.location = "Place_WestSumatra.html";
	}
	else if(searchVal == "jambi"){
		window.location = "Place_Jambi.html";
	}
	else if(searchVal == "bengkulu"){
		window.location = "Place_Bengkulu.html";
	}
	else if(searchVal == "riau"){
		window.location = "Place_Riau.html";
	}
	else if(searchVal == "riau archipelago"){
		window.location = "Place_RiauArchipelago.html";
	}
	else if(searchVal == "bangka belitung"){
		window.location = "Place_BangkaBelitung.html";
	}
	else if(searchVal == "south sumatra"){
		window.location = "Place_SouthSumatra.html";
	}
	else if(searchVal == "lampung"){
		window.location = "Place_Lampung.html";
	}
	else if(searchVal == "north kalimantan"){
		window.location = "Place_NorthKalimantan.html";
	}
	else if(searchVal == "east kalimantan"){
		window.location = "Place_EastKalimantan.html";
	}
	else if(searchVal == "south kalimantan"){
		window.location = "Place_SouthKalimantan.html";
	}
	else if(searchVal == "west kalimantan"){
		window.location = "Place_WestKalimantan.html";
	}
	else if(searchVal == "central kalimantan"){
		window.location = "Place_CentralKalimantan.html";
	}
	else if(searchVal == "bali"){
		window.location = "Place_Bali.html";
	}
	else if(searchVal == "west nusa tenggara"){
		window.location = "Place_WestNusaTenggara.html";
	}
	else if(searchVal == "east nusa tenggara"){
		window.location = "Place_EastNusaTenggara.html";
	}
	else if(searchVal == "banten"){
		window.location = "Place_Banten.html";
	}
	else if(searchVal == "jakarta" || searchVal == "dki jakarta"){
		window.location = "Place_Jakarta.html";
	}
	else if(searchVal == "west java"){
		window.location = "Place_WestJava.html";
	}
	else if(searchVal == "central java"){
		window.location = "Place_CentralJava.html";
	}
	else if(searchVal == "yogyakarta"){
		window.location = "Place_Yogyakarta.html";
	}
	else if(searchVal == "east java"){
		window.location = "Place_EastJava.html";
	}
	else if(searchVal == "north sulawesi"){
		window.location = "Place_NorthSulawesi.html";
	}
	else if(searchVal == "gorontalo"){
		window.location = "Place_Gorontalo.html";
	}
	else if(searchVal == "central sulawesi"){
		window.location = "Place_CentralSulawesi.html";
	}
	else if(searchVal == "west sulawesi"){
		window.location = "Place_WestSulawesi.html";
	}
	else if(searchVal == "south sulawesi"){
		window.location = "Place_SouthSulawesi.html";
	}
	else if(searchVal == "southeast sulawesi" || searchVal == "south east sulawesi"){
		window.location = "Place_SouthEastSulawesi.html";
	}
	else if(searchVal == "maluku"){
		window.location = "Place_Maluku.html";
	}
	else if(searchVal == "north maluku"){
		window.location = "Place_NorthMaluku.html";
	}
	else if(searchVal == "papua"){
		window.location = "Place_Papua.html";
	}
	else if(searchVal == "west papua"){
		window.location = "Place_WestPapua.html";
	}
	else{
		alert("Search not found.\nPlease enter the correct province name of Indonesia");
	}
}