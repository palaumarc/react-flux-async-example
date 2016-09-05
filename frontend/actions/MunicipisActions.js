var AppDispatcher = require('../dispatcher/AppDispatcher');

var actionNames = {

  SELECT_MUNICIPI: 'SELECT_MUNICIPI',
  RECEIVE_MUNICIPIS: 'RECEIVE_MUNICIPIS',
}

module.exports.actions = {
  
  selectMunicipi: function(selectorId, codiMunicipi) {
    AppDispatcher.dispatch ({
      type: actionNames.SELECT_MUNICIPI,
      codiMunicipi,
      selectorId
    });
  },

  receiveMunicipis: function(municipis) {
    AppDispatcher.dispatch ({
      type: actionNames.RECEIVE_MUNICIPIS,
      municipis
    });
  }
}

module.exports.actionNames = actionNames;