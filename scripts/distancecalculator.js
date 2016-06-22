//Calculate distance between the two airports
//Aero API KEY
var key = 'AERO_API_KEY';
//API Request validator
var airportApiReq = false;
//Validate Airport
var validAirport = false;

//Airport Data
var departureAirportData = {}

var destinationAirportData = {}

//Validate airport code
function validateAirportCode(airport, key) {
    $.ajax({
        type: 'GET',
        url: "https://airport.api.aero/airport/" + airport + "?user_key=" + key,
        dataType: "jsonp",
        success: function(parsed_json) {
            console.log("Hey man")
            var airportOneSearch = parsed_json['success'];
            var errorMsg = parsed_json['errorMessage'];
            validAirport = true;
            if (airportOneSearch == false) {
                // validAirport = false;            //To make sure both airport codes are valid
                $('#distance').html(errorMsg + ". Invalid Airport code");
                return;
            }
        }
    });
}

//Calculate airport location coordinates
function getAirportLngLat(airportA, airportB, key) {
    $.ajax({
        type: 'GET',
        url: "https://airport.api.aero/airport/" + airportA.airport + "?user_key=" + key,
        dataType: "jsonp",
        success: function(parsed_json) {
            airportA.latitude = parsed_json.airports[0].lat;
            airportA.longitude = parsed_json.airports[0].lng;
            if (airportApiReq) {
                //Plot flight path on google map
                initMap(departureAirportData.latitude, departureAirportData.longitude, destinationAirportData.latitude, destinationAirportData.longitude);
                airportApiReq = false; //Toggle off
            } else {
                //Find latitude and longitude coordinates for destination airport
                getAirportLngLat(destinationAirportData, departureAirportData, key);
                airportApiReq = true; //Toggle on to allow map plotting
            }
        }
    });
}


//Calaculate airport distances
function displayDistanceData(departureAirport, destinationAirport, key) {
    $.ajax({
        type: 'GET',
        url: "https://airport.api.aero/airport/distance/" + departureAirport + "/" + destinationAirport + "?user_key=" + key,
        dataType: "jsonp",
        success: function(parsed_json) {
            var distance = parsed_json['distance'].replace(",", "");
            var unit = parsed_json['unit'];
            var distanceMiles = Math.round(parseInt(distance) / 1.852);
            $('#distance').html(distanceMiles + " nautical miles");
            getAirportLngLat(departureAirportData, destinationAirportData, key);
        }
    });
}


//Dom interaction
$(document).ready(function() {
    $("#submit").click(function() {
        departureAirportData.airport = $("#departureAirport").val();
        destinationAirportData.airport = $("#destinationAirport").val();

        // Validate form input
        if (departureAirportData.airport === "" || destinationAirportData.airport === "")
            $('#distance').html("Please enter valid Airport code");

        // Validate airports
        validateAirportCode(departureAirportData.airport, key) // Validate origin airport
        validateAirportCode(destinationAirportData.airport, key) // Validate destination airport
        
        //Display calculated distances between airport
        displayDistanceData(departureAirportData.airport, destinationAirportData.airport, key);
    });
});
