import { Store } from 'flux/utils';

var actionNames = require('../actions/MunicipisActionNames');
var actions = require('../actions/MunicipisActions');
var AppDispatcher = require('../dispatcher/AppDispatcher');

class MunicipisStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this.municipis = [];
  }

  getMunicipis() {
    return this.municipis;
  }

  fetchMunicipis() {
    fetch('/municipis/metadades')
    .then((response) => {
      return response.json();
    })
    .then((receivedMetadata) => {
      actions.receiveMunicipis(receivedMetadata);
    });
  }

  receiveMunicipis(newMunicipis) {
    this.municipis = newMunicipis;
  }

  // Overriden method given by Flux library Store 
  __onDispatch (action) {

    switch(action.type) {

      case actionNames.FETCH_MUNICIPIS:
        this.fetchMunicipis();
        break;

      case actionNames.RECEIVE_MUNICIPIS:
        this.receiveMunicipis(action.municipis);
        this.__emitChange();
        break;
    }
  }
}

const instance = new MunicipisStore(AppDispatcher);
module.exports = instance;