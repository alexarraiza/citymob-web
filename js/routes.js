const tolerance = 10e-2; 
var directionsDisplay;
var directionsService;
var start = new google.maps.LatLng(41.388030259202395, 2.1153616905212402);
var end = new google.maps.LatLng(41.393745011567695, 2.123311758041382);

/**
 * show walking route between 2 points
 * points should be like this:
 *	  var start = new google.maps.LatLng(41.38987352294802, 2.110748291015625);
 *
 */
function calcRoute(start, end) {
 directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(map);
   var request = {
    origin: start,
    destination: end,
    travelMode: 'WALKING'
  };
  directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      directionsDisplay.setDirections(result);
    }
  });
}

/**
 * determines if a point is next to a route
 * route should be like:
 * 		result.routes[0].overview_path
 * point should be like:
 *		new google.maps.LatLng(41.391616, 2.116506429138184);
 */
function checkPointInRoute(route, point) {
	var path = new google.maps.Polyline({
		path: result.routes[0].overview_path
	});
	if (google.maps.geometry.poly.isLocationOnEdge(point, path, tolerance)) {
	    alert("Barrera encontrada!");
	}
}