//Auto complete airport names and codes 
//Listen for DOM input text
$(document).ready(function() {
    $(".autocomplete").autocomplete({
        source: autocompleteSearch,
        minLength: 2
    });
});


//Autcomplete search Airport data
function autocompleteSearch(request, response) {
    var searchTerm = request.term.toLowerCase();
    var ret = [];
    //source = IATA JSON data for USA airports
    $.each(source, function(i, airportItem) {
        if (airportItem.code.toLowerCase().indexOf(searchTerm) !== -1 || airportItem.name.toLowerCase().indexOf(searchTerm) === 0)
            ret.push(airportItem);
    });
    response($.map(ret, function(airport) {
        return {
            label: airport.name + " - " + airport.code,
            value: airport.code
        }
    }));
}