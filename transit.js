// 
// - - - CREATING THE MAP
// 

// setting up necessary variables

function init()
{
	var request = new XMLHttpRequest();

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

	// create a map in the "map_canvas" <div>
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	
}

function renderMap() 
{
	me = new google.maps.LatLng(myLat, myLng);

	// update map & go there
	map.panTo(me);

	// create a marker
	marker = new google.maps.Marker({
		position: me;
		title: "Here";

	});
	marker.setMap(map);

	google.maps.event.addListener(marker, 'click', function() {
					infowindow.setContent(marker.title);
					infowindow.open(map, marker);
				});

				// Calling Google Places API
				var request = {
					location: me,
					radius: '500',
					types: ['food']
				};
				service = new google.maps.places.PlacesService(map);
				service.search(request, callback);
}


// Taken from http://code.google.com/apis/maps/documentation/javascript/places.html
			function callback(results, status)
			{
				if (status == google.maps.places.PlacesServiceStatus.OK) {
					alert("Got places back!");
					places = results;
					for (var i = 0; i < results.length; i++) {
						createMarker(results[i]);
					}
				}
			}

			function createMarker(place)
			{
				var placeLoc = place.geometry.location;
				var marker = new google.maps.Marker({
					map: map,
					position: place.geometry.location
				});

				google.maps.event.addListener(marker, 'click', function() {
					infowindow.close();
					infowindow.setContent(place.name);
					infowindow.open(map, this);
				});
      }







}
