var me = new google.maps.LatLng(42.3581, -71.0636);
var map;

function initialize() {
	var mapOptions = {
		zoom: 13,
		center: me
	};

	map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
}

var marker = new google.maps.Marker({
	position: me,
	map: map,
	title: "HI, YOU FOUND ME!"
});


//
// RED LINE MARKERS
//

var Alewife	= new google.maps.LatLng(42.395428,-71.142483);
var Andrew	= new google.maps.LatLng(42.330154, -71.057655);
var Ashmont	= new google.maps.LatLng(42.284652, -71.064489);
var Braintree = new google.maps.LatLng(42.2078543,-71.0011385);
var Broadway = new google.maps.LatLng(42.342622,-71.056967);
var Central = new google.maps.LatLng(42.365486,-71.103802);
var Charles	= new google.maps.LatLng(42.361166,-71.070628); //charles mgh
var Davis = new google.maps.LatLng(42.39674,-71.121815); 
var DCross = new google.maps.LatLng(42.355518,-71.060225); // downtown crossing
var Fields = new google.maps.LatLng(42.300093,-71.061667);
var Harvard = new google.maps.LatLng(42.373362,-71.118956);
var JFK = new google.maps.LatLng(42.320685,-71.052391); // jfk-umass
var Kendall	= new google.maps.LatLng(42.36249079,-71.08617653);
var NQuincy = new google.maps.LatLng(42.275275,-71.029583);
var Park = new google.maps.LatLng(42.35639457,-71.0624242);
var Porter = new google.maps.LatLng(42.3884,-71.119149);
var QuincyA = new google.maps.LatLng(42.233391,-71.007153);
var QuincyC = new google.maps.LatLng(42.251809,-71.005409);
var Savin = new google.maps.LatLng(42.31129,-71.053331); // Savin Hill
var Shawmut	= new google.maps.LatLng(42.29312583,-71.06573796);
var South = new google.maps.LatLng(42.352271,-71.055242);
var Wollaston = new google.maps.LatLng(42.2665139,-71.0203369);

var redLine = [Alewife, Andrew, Ashmont, Braintree, Broadway, Central, Charles,
				Davis, DCross, Fields, Harvard, JFK, Kendall, NQuincy, Park, Porter, 
				QuincyA, QuincyC, Savin, Shawmut, South, Wollaston];
var redLineMarkers = new Array();

for (int i = 0; i < redLine.length; i++) {
	redLineMarkers[i] = new google.maps.Marker ({
		position: redLine[i];
		map: map;
	});

}


/*

content 

*/



/*
//
// CODE FROM CLASS
// 
data = JSON.parse (response.text);

// to print out a line:
// console.log(data.line);

//  Demo
stop_of_interest = "Davis";


// Step 1: go through each train destination
for (i = 0; i < data["schedule"].length; i++) {
	destination = data["schedule"][i];

	// step 2: get list of stops 
	stops = destination["Predictions"];
	for (j = 0; j < stops.length; j++) {
		s = stops[j];
		if (s == stop_of_interest) {
			console.log(s["Seconds"]);
			console.log(destination["Destination"]);
		}
	}
}

// 


function parse {

schedule = JSON.parse();
schedule.line


}
/*
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
			renderMap();
		})
	}

}
*/

/* NOTES
google.maps.Map - The map object (duh!)
google.maps.LatLng - An object that contains the latitude and longitude pair
google.maps.Marker - A marker
google.maps.InfoWindow - An info window
google.maps.Polyline - A linear overlay
google.maps.event - An event listener for Google Maps
*/

*/

google.maps.event.addDomListener(window, 'load', initialize);

