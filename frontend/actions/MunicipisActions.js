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
  },

  changeActiveDay: function(selectorId, indexOfActiveDay) {
    AppDispatcher.dispatch ({
      type: actionConstants.CHANGE_ACTIVE_DAY,
      selectorId,
      indexOfActiveDay
    });
  }

}