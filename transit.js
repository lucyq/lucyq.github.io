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

	getGeoLocation();

}

function getGeoLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = new google.maps.LatLng(position.coords.latitude,
											 position.coords.longitude);
			var infowindow = new google.maps.InfoWindow({
				map: map;
				position: pos;
				content: "FOUND YOU!"
			});
		}
		map.setCenter(pos);
	} else {
		"Your browser doesn't support Geolocation"
	}

}


google.maps.event.addDomListener(window, 'load', init);

