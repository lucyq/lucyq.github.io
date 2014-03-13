//
// - - - SET UP
// 

// create a map
var map;

function init(){
	var mapOptions = {
		zoom: 13;
		center: new google.maps.LatLng(-34.397, 150.644)
	};

	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
}

google.maps.event.addDomListener(window, 'load', init);
