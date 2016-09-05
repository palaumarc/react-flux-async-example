var fs = require("fs");

var metadata = JSON.parse(fs.readFileSync("data/metadades_municipis.json", "utf8"));
var weatherForecast = JSON.parse(fs.readFileSync("data/prediccions_municipals.json", "utf8"));

module.exports.metadata = () => {return metadata};
module.exports.weatherForecast = () => {return weatherForecast};