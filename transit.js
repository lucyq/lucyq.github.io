function initialize() {
	var mapOptions = {
		zoom: 13,
		center: new google.maps.LatLng(-34.497, 160.755)
	};

	var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);


/* NOTES
google.maps.Map - The map object (duh!)
google.maps.LatLng - An object that contains the latitude and longitude pair
google.maps.Marker - A marker
google.maps.InfoWindow - An info window
google.maps.Polyline - A linear overlay
google.maps.event - An event listener for Google Maps
*/