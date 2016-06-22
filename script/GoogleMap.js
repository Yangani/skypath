/**
 * FILE NAME: DisplayMap.js
 * PURPOSE: Display Google Maps on screen - powered by Google API
 * SIDE EFFECT: None
 */

function initialize(airportOneLat, airportOneLong, airportTwoLat, airportTwoLong) {
  var myLatLng = new google.maps.LatLng((airportOneLat+airportTwoLat)/2, (airportOneLong+airportTwoLong)/2);
  var mapOptions = {
    zoom: 4,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

// Define the custom symbols. All symbols are defined via SVG path notation.
// They have varying stroke color, fill color, stroke weight,
// opacity and rotation properties.
  var symbolOne = {
    path: 'M -2,0 0,-2 2,0 0,2 z',
    strokeColor: '#F00',
    fillColor: '#F00',
    fillOpacity: 1
  };

  var symbolTwo = {
    path: 'M -1,0 A 1,1 0 0 0 -3,0 1,1 0 0 0 -1,0M 1,0 A 1,1 0 0 0 3,0 1,1 0 0 0 1,0M -3,3 Q 0,5 3,3',
    strokeColor: '#00F',
    rotation: 45
  };

  var symbolThree = {
    path: 'M -2,-2 2,2 M 2,-2 -2,2',
    strokeColor: '#292',
    strokeWeight: 4
  };

// Create the polyline and add the symbols via the 'icons' property.

  var lineCoordinates = [
    new google.maps.LatLng(airportOneLat, airportOneLong),
    new google.maps.LatLng(airportTwoLat, airportTwoLong)
  ];

  var line = new google.maps.Polyline({
    path: lineCoordinates,
    icons: [
      {
        icon: symbolOne,
        offset: '0%'
      }, {
        icon: symbolTwo,
        offset: '50%'
      }, {
        icon: symbolThree,
        offset: '100%'
      }
    ],
    map: map
  });
}