var actionConstants = require('./MunicipisActionNames');
var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
  
  selectMunicipi: function(municipi) {
    AppDispatcher.dispatch ({
      type: actionConstants.SELECT_MUNICIPI,
      municipi
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