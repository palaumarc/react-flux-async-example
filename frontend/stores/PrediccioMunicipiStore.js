var Store = require('flux/utils').Store;
var actionNames = require('../actions/PrediccioMunicipiActions').actionNames;
var AppDispatcher = require('../dispatcher/AppDispatcher');

class PrediccioMunicipiStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this.indexOfActiveDay = {};
    this.prediccioMunicipi = {};
  }

  getActiveDay(selectorId) {
    return this.indexOfActiveDay[selectorId];
  }

  setActiveDay(selectorId, indexOfActiveDay) {
    this.indexOfActiveDay[selectorId] = indexOfActiveDay;
  }

  getPrediccioMunicipi(selectorId) {
    return this.prediccioMunicipi[selectorId];
  }

  setPrediccioMunicipi(selectorId, prediccioMunicipi) {
    this.prediccioMunicipi[selectorId] = prediccioMunicipi;
  }

  // Overriden method given by Flux library Store 
  __onDispatch (action) {

    switch(action.type) {

      case actionNames.RECEIVE_PREDICCIO_MUNICIPI:
        this.setPrediccioMunicipi(action.selectorId, action.prediccioMunicipi);
        this.__emitChange();
        break;

      case actionNames.CHANGE_ACTIVE_DAY:
        this.setActiveDay(action.selectorId, action.indexOfActiveDay);
        this.__emitChange();
        break;
    }
  }
}

const instance = new PrediccioMunicipiStore(AppDispatcher);
module.exports = instance;
