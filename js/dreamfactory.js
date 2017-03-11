function login(loginObj){
    $.ajax({
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            url: '/api/v2/user/session',
            data: JSON.stringify({
            'email': 'citymob@citymob.com',
            'password': 'city!123'
        }),
        method:'POST',
        success:function (response) {
            onLogin(response);
        },
        error:function (response) {
            alert('Error de autenticación');
        }
    });
}

function getMarkers(session_token){
    $.ajax({
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        url: '/api/v2/citymob/_table/marker',
	    beforeSend: function (request) {
                request.setRequestHeader("X-DreamFactory-Api-Key", "374a892a42f36c822f0e0cfa38e02f00e29d257131ea55f281be61f2864a6650");
                request.setRequestHeader("X-DreamFactory-Session-Token", session_token);
                request.setRequestHeader("Content-Type","application/json");
                request.setRequestHeader("Accept","application/json");
            },
        method:'GET',
        success:function (response) {
            onGetMarkers(response);
        },
        error:function (response) {
            alert('ko');
        }
    });
}

function setMarker(marker){
    $.ajax({
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        url: '/api/v2/marker',
        data: JSON.stringify({
            //TODOfill with marker object
        }),
        method:'POST',
        success:function (response) {
            //show marker on map
            placeMarker(latLng);
        },
        error:function (response) {
        // Handle error
        }
    });
}

function markerDreamToGoogleMapper(dreamfactoryMarker){
    var latLng = new google.maps.LatLng(dreamfactoryMarker.LAT, dreamfactoryMarker.LNG);

    return new google.maps.Marker({
    	position: latLng,
    	map: map,
		icon: markerImage,
		title: dreamfactoryMarker.TITLE
    });
    // {
    //     latLng: '',
    //     : dreamfactoryMarker.ACTIVE
    //     : dreamfactoryMarker.DESCRIPTION
    //     : dreamfactoryMarker.ID_AUTO
    //     : dreamfactoryMarker.ID_MARKER_TYPE
    //     : dreamfactoryMarker.LAT
    //     : dreamfactoryMarker.LNG
    //     : dreamfactoryMarker.OFF_DATE
    //     : dreamfactoryMarker.ON_DATE
    //     : dreamfactoryMarker.TITLE
    // };

}