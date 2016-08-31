import { Store } from 'flux/utils';

var actionNames = require('../actions/MunicipisActionNames');
var AppDispatcher = require('../dispatcher/AppDispatcher');

class ActiveDayStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this.indexOfActiveDay = {};
  }

  getActiveDay(selectorId) {
    return this.indexOfActiveDay[selectorId];
  }

  setActiveDay(selectorId, indexOfActiveDay) {
    console.log("setActiveDay");
    console.log("selectorId", selectorId);
    console.log("indexOfActiveDay", indexOfActiveDay);
    this.indexOfActiveDay[selectorId] = indexOfActiveDay;
  }

  // Overriden method given by Flux library Store 
  __onDispatch (action) {

    switch(action.type) {

      case actionNames.CHANGE_ACTIVE_DAY:
        this.setActiveDay(action.selectorId, action.indexOfActiveDay);
        this.__emitChange();
        break;
    }
  }
}

const instance = new ActiveDayStore(AppDispatcher);
module.exports = instance;
