//Render flight path on google map
function initMap(fromAirportLat, fromAirportLong, toAirportLat, toAirportLong) {
    var mapOptions = {
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var fromAirportSymbol = {
        path: google.maps.SymbolPath.CIRCLE,
        strokeColor: 'red',
        fillColor: 'black',
        fillOpacity: 1.5,
        scale: 8
    };

    var destinationSymbol = {
        path: google.maps.SymbolPath.CIRCLE,
        strokeColor: 'red',
        fillColor: 'green',
        fillOpacity: 1.5,
        scale: 8
    };

    var planeSymbol = {
        path: 'M362.985,430.724l-10.248,51.234l62.332,57.969l-3.293,26.145 l-71.345-23.599l-2.001,13.069l-2.057-13.529l-71.278,22.928l-5.762-23.984l64.097-59.271l-8.913-51.359l0.858-114.43 l-21.945-11.338l-189.358,88.76l-1.18-32.262l213.344-180.08l0.875-107.436l7.973-32.005l7.642-12.054l7.377-3.958l9.238,3.65 l6.367,14.925l7.369,30.363v106.375l211.592,182.082l-1.496,32.247l-188.479-90.61l-21.616,10.087l-0.094,115.684',
        scale: 0.0700,
        strokeOpacity: 1,
        color: 'red',
        strokeWeight: 2,
        anchor: new google.maps.Point(300, 300),
        offset: '10%'
    };


    //Array of origin airport and destination aiport coordinates
    var longLatCoordinates = [
        new google.maps.LatLng(fromAirportLat, fromAirportLong),
        new google.maps.LatLng(toAirportLat, toAirportLong)
    ];

    //  Create a new viewpoint bound
    var latlngbounds = new google.maps.LatLngBounds();


    longLatCoordinates.forEach(function(latLng) {
        latlngbounds.extend(latLng); // And increase the bounds to take this point
    });

    map.fitBounds(latlngbounds);        // auto-zoom
    map.setCenter(latlngbounds);        // Set map center 
    map.panToBounds(latlngbounds);      // auto-center

    //Create flight path with symbols appended
    var flightPath = new google.maps.Polyline({
        path: longLatCoordinates,
        geodesic: true,
        strokeOpacity: 0.6,
        strokeWeight: 3,
        icons: [{
            icon: planeSymbol,
            offset: '0%'
        }, {
            icon: fromAirportSymbol,
            offset: '0%'
        }, {
            icon: destinationSymbol,
            offset: '100%'
        }],
        map: map
    });

    //Animate plane symbol
    //DOM setInterval() function to change the offset of the plane symbol at fixed intervals.
    function animateFlight(flightPath) {
        var count = 0;
        window.setInterval(function() {
            count = (count + 1) % 200;

            var icons = flightPath.get('icons');
            icons[0].offset = (count / 2) + '%';
            flightPath.set('icons', icons);
        }, 35);
    }
    animateFlight(flightPath);
}
