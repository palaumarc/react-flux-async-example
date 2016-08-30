var fs = require("fs");

var metadata = null;
var weatherForecast = null;

module.exports.metadata = () => {return metadata};
module.exports.weatherForecast = () => {return weatherForecast};

module.exports.init = function(){
  metadata = JSON.parse(fs.readFileSync("data/metadades_municipis.json", "utf8"));
  weatherForecast = JSON.parse(fs.readFileSync("data/prediccions_municipals.json", "utf8"));
};
