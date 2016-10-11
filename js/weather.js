var apiKey = require('./../.env').apiKey;
Weather = function() {

};

Weather.prototype.getHumidity = function(location, displayHumidity) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + location +  '&appid=' + apiKey).then(function(response) {
    displayHumidity(location, response.main.humidity);
  }).fail(function(error) {
    $('.show-humidity').text(error.responseJSON.message);
  });
};

Weather.prototype.getTemp = function(location, displayTemp) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + location +  '&appid=' + apiKey).then(function(response) {
    displayTemp(location, getCelsius(response.main.temp), getFahrenheit(response.main.temp));
  }).fail(function(error) {
    $('.show-temp').text(error.responseJSON.message);
  });
};

function getCelsius(Kelvin) {
  return Kelvin - 273.15;
}

function getFahrenheit(Kelvin) {
  var temp = (Kelvin * 9)/5 - 459.67;
  return temp;
}

exports.weatherModule = Weather;
