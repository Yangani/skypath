/**
 * FILE NAME: GetDistance.js
 * PURPOSE: Validate and get distance between two airport inputs.
 * SIDE EFFECT: Initializes Google Map after successfully displaying distance.
 */

function openGoogleMaps (airportOneLat, airportOneLong, airportTwoLat, airportTwoLong){
	initialize(airportOneLat, airportOneLong, airportTwoLat, airportTwoLong)
}

function getAirportTwoLngLat (airport2, key, airportOneLat, airportOneLong) {
	$.ajax({
		type: 'GET',
		url : "https://airport.api.aero/airport/" + airport2 + "?user_key=" + key,
		dataType : "jsonp",
		success : function(parsed_json) {
			airportTwoLat = parsed_json.airports[0].lat;
			airportTwoLong = parsed_json.airports[0].lng;
			 
			openGoogleMaps (airportOneLat, airportOneLong, airportTwoLat, airportTwoLong);
		 }
	});
}

function getAirportOneLngLat (airport1, airport2, key) {
	$.ajax({
		type: 'GET',
		url : "https://airport.api.aero/airport/" + airport1 + "?user_key=" + key,
		dataType : "jsonp",
		success : function(parsed_json) {
			airportOneLat = parsed_json.airports[0].lat;
			airportOneLong = parsed_json.airports[0].lng;
			
			getAirportTwoLngLat(airport2, key, airportOneLat, airportOneLong);
		}
	});
}

function displayDistanceAndMap (airport1, airport2, key) {
	$.ajax({
		type: 'GET',
		url : "https://airport.api.aero/airport/distance/" + airport1 + "/" + airport2 + "?user_key=" + key,
		dataType : "jsonp",
		success : function(parsed_json) {
			var distance = parsed_json['distance'].replace(",", "");
			var unit = parsed_json['unit'];
			var distanceMiles = Math.round(parseInt(distance) / 1.852);
			$('#distance').html("distance = " + distanceMiles + " (nautical) miles");
			getAirportOneLngLat(airport1, airport2, key);
		}
	});
}

$(document).ready(function(){
  $("#submit").click(function(){
	  var airport1 = $("#airport1").val();
	  var airport2 = $("#airport2").val();
	  var key = '64e01cdc6efeadac186210bfd4e694ff';
	  
	  /* Validate form */
	  if (airport1 === "" || airport2 === "")
		  $('#distance').html("Please fill out the form.");
	  
	  /* Validate airport 1 */
	  $.ajax({
			type: 'GET',
		    url : "https://airport.api.aero/airport/"+airport1+"?user_key=" + key,
			dataType : "jsonp",
			success : function(parsed_json) {
				var airportOneSearch = parsed_json['success'];
				var errorMsg = parsed_json['errorMessage'];
				
				if (airportOneSearch == false)
				 $('#distance').html(errorMsg + ". Try different keywords.");
				
				else {
					/* Validate airport 2 */
					$.ajax({
						 type: 'GET',
					     url : "https://airport.api.aero/airport/"+airport2+"?user_key=" + key,
						 dataType : "jsonp",
						 success : function(parsed_json) {
							 var airportTwoSearch = parsed_json['success'];
							 var errorMsg = parsed_json['errorMessage'];
								
							 if (airportTwoSearch == false)
								 $('#distance').html(errorMsg + ". Try different keywords.");
							 
							 else
								 /* Show on page distance and Google Maps */
								 displayDistanceAndMap (airport1, airport2, key);
						 }
					 
					});
				}
			}
	  }); 
  });
});