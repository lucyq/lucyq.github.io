var me = new google.maps.LatLng(42.3581, 71.0636)
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


google.maps.event.addDomListener(window, 'load', initialize);



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