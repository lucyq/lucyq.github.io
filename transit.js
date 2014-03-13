// 
// - - - CREATING THE MAP
// 

// setting up necessary variables

function init()
{
	var request = new XMLHttpRequest();
/*
	// Get user's location
	if (navigator.geolocation) { // if geolocation is supported
	navigator.geolocation.getCurrentPosition(function(position){
		myLat = position.coords.latitude;
		myLng = position.coords.longitude;
		renderMap();
		});

	}
	else {
		alert("Geolocation is not supported by your web browser. Sorry!");
	}


	
	var me = new google.maps.LatLng(myLat, myLng);
	// set up map
	var myOptions = {
		zoom: 13,
		center: me,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
*/
	// create a map in the "map_canvas" <div>
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	
}


