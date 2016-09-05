var React = require('react');
var Municipi = require('./Municipi');
var newMunicipisStore = require('../stores/NewMunicipisStore');
var actions = require('../actions/MunicipisActions');
var prediccioStore = require('../stores/PrediccioStore');

var MainContainer = React.createClass({

  getInitialState: function() {
    return {
      municipis: newMunicipisStore.getMunicipis(),
      codisOfSelectedMunicipis: newMunicipisStore.getCodisOfSelectedMunicipis(),
      prediccio: newMunicipisStore.getPrediccioMunicipi()
    }
  },

  componentDidMount: function() {
    this.newMunicipisStoreRemoveToken = newMunicipisStore.addListener(this.updateState);
    actions.fetchMunicipis();
  },

  componentWillUnmount: function() {
    this.newMunicipisStoreRemoveToken.remove();
  },

  updateState: function() {
    this.setState({
      municipis: newMunicipisStore.getMunicipis(),
      codisOfSelectedMunicipis: newMunicipisStore.getCodisOfSelectedMunicipis(),
      prediccio: newMunicipisStore.getPrediccioMunicipi()
    })
  },

  updateSelectedMunicipi: function() {
    this.setState({
      codisOfSelectedMunicipis: municipiStore.getSelectedMunicipisCodi()
    })
  },

  updateMunicipis: function() {
    this.setState({
      municipis: municipisStore.getMunicipis()
    })
  },

  updatePrediccio() {
    this.setState({
      prediccio: prediccioStore.getPrediccionsMunicipals()
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