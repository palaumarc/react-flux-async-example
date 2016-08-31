var actionConstants = require('./MunicipisActionNames');
var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
  
  selectMunicipi: function(selectorId, codiMunicipi) {
    AppDispatcher.dispatch ({
      type: actionConstants.SELECT_MUNICIPI,
      codiMunicipi,
      selectorId
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
  },

  receivePrediccioMunicipi: function(selectorId, prediccioMunicipi) {
    AppDispatcher.dispatch ({
      type: actionConstants.RECEIVE_PREDICCIO_MUNICIPI,
      selectorId,
      prediccioMunicipi
    });
  }

}