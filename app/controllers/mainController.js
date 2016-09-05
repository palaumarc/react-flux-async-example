var express = require('express');
var router = express.Router();
var dataAccess = require('../dataAccess/dataAccess');

router.get('/municipis/metadades', function (req, res) {
        res.json(dataAccess.metadata());
    })

router.get('/municipis/:id', function (req, res) {
    var forecast = dataAccess.weatherForecast().find(function (obj) {
       return obj.codi === req.params.id;
    });

  res.json(forecast);
})

module.exports = router