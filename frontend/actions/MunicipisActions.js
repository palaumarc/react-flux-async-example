var actionConstants = require('./MunicipisActionNames');
var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
  
  selectMunicipi: function(codiMunicipi) {
    AppDispatcher.dispatch ({
      type: actionConstants.SELECT_MUNICIPI,
      codiMunicipi
    });
  },

  fetchMunicipis: function() {
    AppDispatcher.dispatch ({
      type: actionConstants.FETCH_MUNICIPIS
    });
  },

  receiveMunicipis: function(municipis) {
    AppDispatcher.dispatch ({
      type: actionConstants.RECEIVE_MUNICIPIS,
      municipis
    });
  }
}