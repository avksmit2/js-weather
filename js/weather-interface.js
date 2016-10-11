var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(location, humidityData) {
  $('.show-humidity').text("The humidity in " + location + " is " + humidityData + "%");
};

var displayTemp = function(location, tempDataCelsius, tempDataFahrenheit) {
  $('.show-temp').text("The temperature in " + location + " is " + tempDataCelsius.toFixed(2) + " Celsius and " + tempDataFahrenheit.toFixed(2) + " Fahrenheit.");
};

$(document).ready(function() {
  var weather = new Weather();


  $('#weather-location').submit(function(event) {
    event.preventDefault();
    var location = $('#location').val();
    $("#location").val("");
    weather.getHumidity(location, displayHumidity);
    weather.getTemp(location, displayTemp);
  });
});
