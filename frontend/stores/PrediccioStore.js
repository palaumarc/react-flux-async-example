import { Store } from 'flux/utils';

var actionNames = require('../actions/MunicipisActionNames');
var actions = require('../actions/MunicipisActions');
var AppDispatcher = require('../dispatcher/AppDispatcher');

class MunicipiStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this.prediccioMunicipi = {};
  }

  getPrediccionsMunicipals() {
    return this.prediccioMunicipi;
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
    }
  }
}

const instance = new MunicipiStore(AppDispatcher);
module.exports = instance;
