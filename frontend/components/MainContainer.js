var React = require('react');
var Municipi = require('./Municipi');
var municipisStore = require('../stores/MunicipisStore');
var municipiStore = require('../stores/MunicipiStore');
var actions = require('../actions/MunicipisActions');

var MainContainer = React.createClass({

  getInitialState: function() {
    return {
      municipis: municipisStore.getMunicipis(),
      selectedMunicipiCodi: municipiStore.getSelectedMunicipiCodi()
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
      selectedMunicipiCodi: municipiStore.getSelectedMunicipiCodi()
    })
  },

  updateMunicipis: function() {
    this.setState({
      municipis: municipisStore.getMunicipis(),
      selectedMunicipiCodi: municipisStore.getMunicipis()[0].codi
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

    return (
      <div>
        <Municipi municipis={this.state.municipis} selectedMunicipiCodi={this.state.selectedMunicipiCodi}/>
        {/*<Municipi municipis={this.state.municipis} />*/}
      </div>
    )
  }
});

module.exports = MainContainer;