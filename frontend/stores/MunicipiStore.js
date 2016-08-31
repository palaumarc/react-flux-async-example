import { Store } from 'flux/utils';

var actionNames = require('../actions/MunicipisActionNames');
var actions = require('../actions/MunicipisActions');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var municipisStore = require('./MunicipisStore');

class MunicipiStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this.numberOfMunicipisToShow = 3;
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

    for (var i = 0; i < this.numberOfMunicipisToShow; i++) {
      this.selectedMunicipisCodi[i] = this.selectedMunicipisCodi[i] || municipis[i%numberOfMunicipis].codi;
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
