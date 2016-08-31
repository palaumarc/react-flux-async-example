var React = require('react');
var Municipi = require('./Municipi');
var municipisStore = require('../stores/MunicipisStore');
var municipiStore = require('../stores/MunicipiStore');
var actions = require('../actions/MunicipisActions');
var prediccioStore = require('../stores/PrediccioStore');

var MainContainer = React.createClass({

  getInitialState: function() {
    return {
      municipis: municipisStore.getMunicipis(),
      selectedMunicipisCodi: municipiStore.getSelectedMunicipisCodi(),
      prediccio: prediccioStore.getPrediccionsMunicipals()
    }
  },

  componentDidMount: function() {
    this.municipisStoreRemoveToken = municipisStore.addListener(this.updateMunicipis);
    this.municipiStoreRemoveToken = municipiStore.addListener(this.updateSelectedMunicipi);
    this.prediccioStoreRemoveToken = prediccioStore.addListener(this.updatePrediccio);
    actions.fetchMunicipis();
  },

  componentWillUnmount: function() {
    this.municipisStoreRemoveToken.remove();
    this.municipiStoreRemoveToken.remove();
    this.prediccioStoreRemoveToken.remove();
  },

  updateSelectedMunicipi: function() {
    this.setState({
      selectedMunicipisCodi: municipiStore.getSelectedMunicipisCodi()
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

    var municipiPanels = Object.keys(this.state.selectedMunicipisCodi).map((panelId) => {
        return (
          <Municipi 
            key={panelId} 
            selectorId={panelId} 
            municipis={this.state.municipis} 
            prediccio={this.state.prediccio[panelId]} 
            selectedMunicipiCodi={this.state.selectedMunicipisCodi[panelId]}
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