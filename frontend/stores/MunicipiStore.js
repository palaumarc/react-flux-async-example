import { Store } from 'flux/utils';

var actionNames = require('../actions/MunicipisActionNames');
var actions = require('../actions/MunicipisActions');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var municipisStore = require('./MunicipisStore');

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
  }

  setDefaultSelectedMunicipis(municipis) {
    for (var i = 0; i < 2; i++) {
      this.selectedMunicipisCodi[i] = municipis[i].codi;
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
