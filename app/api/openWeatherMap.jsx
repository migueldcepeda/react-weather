var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=eb791064408d7b34b2abb86726edd62c&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;//template strings, everything inside '{}' is executed as javascript expression

    return axios.get(requestUrl).then(function (res) { //promise
      // debugger;
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    // }, function (res) { // original error case
    //   throw new Error(res.data.message);
    // });
    }, function (err) {
      throw new Error('Unable to fetch weather for that location.');
    });
  }
}
