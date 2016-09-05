import { Store } from 'flux/utils';

var actionNames = require('../actions/MunicipisActionNames');
var actions = require('../actions/MunicipisActions');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var config = require('../config/config');

class MunicipisStore extends Store {

   constructor(dispatcher) {
    super(dispatcher);
    this.municipis = [];
    this.codisOfSelectedMunicipis = {};
    this.prediccioMunicipi = {};
  }

  getMunicipis() {
    return this.municipis;
  }

  getCodisOfSelectedMunicipis() {
    return this.codisOfSelectedMunicipis;
  }

  getPrediccioMunicipi() {
    return this.prediccioMunicipi;
  }

  selectMunicipi(selectorId, codiMunicipi) {
    this.codisOfSelectedMunicipis[selectorId] = codiMunicipi;

    fetch('/municipis/' + codiMunicipi)
    .then((response) => {
      return response.json();
    })
    .then((prediccioMunicipi) => {
      actions.receivePrediccioMunicipi(selectorId, prediccioMunicipi);
    });
  }

  receiveMunicipis(municipis) {
    this.municipis = municipis;

    var numberOfMunicipis = municipis.length;

    for (let i = 0; i < config.NUMBER_OF_MUNICIPIS_TO_SHOW; i++) {
      var defaultSelectedMunicipi = this.codisOfSelectedMunicipis[i] || municipis[i%numberOfMunicipis].codi;
      this.selectMunicipi(i, defaultSelectedMunicipi);
    }
  }

  setPrediccioMunicipi(selectorId, prediccioMunicipi) {
    this.prediccioMunicipi[selectorId] = prediccioMunicipi;
  }

  // Overriden method given by Flux library Store 
  __onDispatch (action) {

    switch(action.type) {

      case actionNames.SELECT_MUNICIPI:
        this.selectMunicipi(action.selectorId, action.codiMunicipi);
        this.__emitChange();
        break;

      case actionNames.RECEIVE_MUNICIPIS:
        this.receiveMunicipis(action.municipis);
        this.__emitChange();
        break;

      case actionNames.RECEIVE_PREDICCIO_MUNICIPI:
        this.setPrediccioMunicipi(action.selectorId, action.prediccioMunicipi);
        this.__emitChange();
        break;
    }
  }
}

const instance = new MunicipisStore(AppDispatcher);
module.exports = instance;
