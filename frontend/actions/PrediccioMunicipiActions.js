var AppDispatcher = require('../dispatcher/AppDispatcher');

var actionNames = {

  RECEIVE_PREDICCIO_MUNICIPI: 'RECEIVE_PREDICCIO_MUNICIPI',
  CHANGE_ACTIVE_DAY: 'CHANGE_ACTIVE_DAY'
}

module.exports.actions = {
  
  receivePrediccioMunicipi: function(selectorId, prediccioMunicipi) {
    AppDispatcher.dispatch ({
      type: actionNames.RECEIVE_PREDICCIO_MUNICIPI,
      selectorId,
      prediccioMunicipi
    });
  },

  changeActiveDay: function(selectorId, indexOfActiveDay) {
    AppDispatcher.dispatch ({
      type: actionNames.CHANGE_ACTIVE_DAY,
      selectorId,
      indexOfActiveDay
    });
  }
}

module.exports.actionNames = actionNames;

