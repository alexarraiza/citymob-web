var loginResp = {};
var currentPos;
var map;
var markerImage = {
	url: 'images/ic_marker/res/mipmap-mdpi/ic_marker.png'
};
var retrievedMarkers = [];
var infoWindow = {};

function sendPoint() {
	var test = {
		"resource": [
			{
				"LAT": "41.000",
				"LNG": "25.000", 
			}
		]
	};
	var dataToSend = JSON.stringify(test);
//	send(dataToSend, dreamsfactory, received);
}

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		alert("not active");
	}
}

function showPosition(position) {
	currentPos = position;
	myMap();
}

function myMap() {
	infoWindow = new google.maps.InfoWindow({content: '',map: map,position: ''});

	var mapProp= {
    	center:new google.maps.LatLng(currentPos.coords.latitude, currentPos.coords.longitude),
    	zoom:17,
	};

	map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
	setMapListeners();
}

function setMapListeners() {
	map.addListener('click', function(event) {
		placeMarker(event.latLng);
    });
}

function setMarkerListeners(marker){
	marker.addListener('mouseover', function() {
		infoWindow.setContent(marker.title);
		infoWindow.position = marker.position;
		infoWindow.open(map, marker);
	});
}

function sendMarker() {
	var marker;
	// addMarker(marker);
}

function showMarkers() {
	if(retrievedMarkers!=null){
		for(var i = 0; i<retrievedMarkers.length; i++){
			var mappedMarker = markerDreamToGoogleMapper(retrievedMarkers[i]);
			setMarkerListeners(mappedMarker);
			showMarkerInList(mappedMarker);
		}
	}
}

function placeMarker(latLng) {
	var marker = new google.maps.Marker({
    	position: latLng,
    	map: map,
		icon: markerImage,
		title: 'Nuevo inconveniente' //TODO 
    });

	setMarkerListeners(marker);
	showMarkerInList(marker);
}

login();

function onLogin(response){
	loginResp = response;
	retrievedMarkers = getMarkers(loginResp.session_token);
}

function onGetMarkers(response){
	retrievedMarkers = response.resource;
	showMarkers();
}

function showMarkerInList(mappedMarker){
	$('<li><a href="#"><i class="fa fa-fw list-icon"></i> <span>'+ mappedMarker.title + '</span></a></li>').insertAfter('#listStart').data('marker', mappedMarker).click(showListMarkerOnMap);
}

function showListMarkerOnMap(){
	map.setCenter($(this).data('marker').internalPosition);
}