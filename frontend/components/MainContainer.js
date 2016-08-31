var React = require('react');
var Municipi = require('./Municipi');
var municipisStore = require('../stores/MunicipisStore');
var municipiStore = require('../stores/MunicipiStore');
var actions = require('../actions/MunicipisActions');


var MainContainer = React.createClass({

  getInitialState: function() {
    return {
      municipis: municipisStore.getMunicipis(),
      selectedMunicipisCodi: municipiStore.getSelectedMunicipisCodi()
    }
  },

  componentDidMount: function() {
    this.municipisStoreRemoveToken = municipisStore.addListener(this.updateMunicipis);
    this.municipiStoreRemoveToken = municipiStore.addListener(this.updateSelectedMunicipi);
    actions.fetchMunicipis();
  },

  componentWillUnmount: function() {
    this.municipisStoreRemoveToken.remove();
    this.municipiStoreRemoveToken.remove();
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

  render: function() {

    if (this.state.municipis.length <= 0) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    var municipiPanels = Object.keys(this.state.selectedMunicipisCodi).map((panelId) => (
        <Municipi key={panelId} selectorId={panelId} municipis={this.state.municipis} selectedMunicipiCodi={this.state.selectedMunicipisCodi[panelId]}/>
      ));

    return (
      <div>
        {municipiPanels}
        {/*<Municipi selectorId={0} municipis={this.state.municipis} selectedMunicipiCodi={this.state.selectedMunicipisCodi[0]}/>
        <Municipi selectorId={1} municipis={this.state.municipis} selectedMunicipiCodi={this.state.selectedMunicipisCodi[1]}/>*/}
      </div>
    )
  }
});

module.exports = MainContainer;