import { Store } from 'flux/utils';

var actionNames = require('../actions/MunicipisActionNames');
var actions = require('../actions/MunicipisActions');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var municipisStore = require('./MunicipisStore');

class MunicipiStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this.selectedMunicipi = {};
  }

  getSelectedMunicipi() {
    return this.selectedMunicipi;
  }

  selectMunicipi(municipi) {
    this.selectedMunicipi = municipi;
  }

  // Overriden method given by Flux library Store 
  __onDispatch (action) {

    switch(action.type) {

      case actionNames.SELECT_MUNICIPI:
        this.selectMunicipi(action.municipi);
        this.__emitChange();
        break;
    }
  }
}

const instance = new MunicipiStore(AppDispatcher);
module.exports = instance;
