var apiKey = require('./../.env').apiKey;
Weather = function() {

};

Weather.prototype.getWeather = function(location, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + location +  '&appid=' + apiKey).then(function(response) {
    displayFunction(location, response.main.humidity);
  }).fail(function(error) {
    $('.show-weather').text(error.responseJSON.message);
  });
};

exports.weatherModule = Weather;
