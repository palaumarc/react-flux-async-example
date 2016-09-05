var React = require('react');
var Municipi = require('./Municipi');
var municipisStore = require('../stores/MunicipisStore');
var actions = require('../actions/MunicipisActions');

var MainContainer = React.createClass({

  getInitialState: function() {
    return {
      municipis: municipisStore.getMunicipis(),
      codisOfSelectedMunicipis: municipisStore.getCodisOfSelectedMunicipis(),
      prediccio: municipisStore.getPrediccioMunicipi()
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
      codisOfSelectedMunicipis: municipisStore.getCodisOfSelectedMunicipis(),
      prediccio: municipisStore.getPrediccioMunicipi()
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
            prediccio={this.state.prediccio[panelId]} 
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