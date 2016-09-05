var React = require('react');
var Municipi = require('./Municipi');
var municipisStore = require('../stores/MunicipisStore');
var actions = require('../actions/MunicipisActions').actions;

var MainContainer = React.createClass({

  getInitialState: function() {
    return {
      municipis: municipisStore.getMunicipis(),
      codisOfSelectedMunicipis: municipisStore.getCodisOfSelectedMunicipis(),
    }
  },

  componentDidMount: function() {
    this.municipisStoreRemoveToken = municipisStore.addListener(this.updateState);

    fetch('/municipis/metadades')
    .then((response) => {
      return response.json();
    })
    .then((receivedMetadata) => {
      actions.receiveMunicipis(receivedMetadata);
    });
  },

  componentWillUnmount: function() {
    this.municipisStoreRemoveToken.remove();
  },

  updateState: function() {
    this.setState({
      municipis: municipisStore.getMunicipis(),
      codisOfSelectedMunicipis: municipisStore.getCodisOfSelectedMunicipis()
    })
  },

  render: function() {

    if (this.state.municipis.length <= 0) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    var municipiPanels = Object.keys(this.state.codisOfSelectedMunicipis).map((panelId) => {
        return (
          <Municipi 
            key={panelId} 
            selectorId={panelId} 
            municipis={this.state.municipis} 
            selectedMunicipiCodi={this.state.codisOfSelectedMunicipis[panelId]}
          />
        )
      });

    return (
      <div>
        {municipiPanels}
      </div>
    )
  }
});

module.exports = MainContainer;