import { Store } from 'flux/utils';

var actionNames = require('../actions/MunicipisActionNames');
var actions = require('../actions/MunicipisActions');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var municipisStore = require('./MunicipisStore');
var config = require('../config/config');

class MunicipiStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this.selectedMunicipisCodi = {};
  }

  getSelectedMunicipisCodi() {
    return this.selectedMunicipisCodi;
  }

  selectMunicipi(selectorId, codiMunicipi) {
    this.selectedMunicipisCodi[selectorId] = codiMunicipi;

    fetch('/municipis/' + codiMunicipi)
    .then((response) => {
      return response.json();
    })
    .then((prediccioMunicipi) => {
      actions.receivePrediccioMunicipi(selectorId, prediccioMunicipi);
    });
  }

  setDefaultSelectedMunicipis(municipis) {
    var numberOfMunicipis = municipis.length;

    for (let i = 0; i < config.NUMBER_OF_MUNICIPIS_TO_SHOW; i++) {
      var defaultSelectedMunicipi = this.selectedMunicipisCodi[i] || municipis[i%numberOfMunicipis].codi;
      this.selectMunicipi(i, defaultSelectedMunicipi);
    }
  }

  // Overriden method given by Flux library Store 
  __onDispatch (action) {

    switch(action.type) {

      case actionNames.SELECT_MUNICIPI:
        this.selectMunicipi(action.selectorId, action.codiMunicipi);
        this.__emitChange();
        break;

      case actionNames.RECEIVE_MUNICIPIS:
        this.setDefaultSelectedMunicipis(action.municipis);
        this.__emitChange();
        break;
    }
  }
}

const instance = new MunicipiStore(AppDispatcher);
module.exports = instance;
