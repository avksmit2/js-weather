var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(location, humidityData) {
  $('.show-weather').text("The humidity in " + location + " is " + humidityData + "%");
};

$(document).ready(function() {
  var weather = new Weather();


  $('#weather-location').submit(function(event) {
    event.preventDefault();
    var location = $('#location').val();
    $("#location").val("");
      weather.getWeather(location, displayHumidity);
  });
});
