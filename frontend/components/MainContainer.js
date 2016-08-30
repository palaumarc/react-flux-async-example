var React = require('react');
var Municipi = require('./Municipi');
var municipisStore = require('../stores/MunicipisStore');
var actions = require('../actions/MunicipisActions');

var MainContainer = React.createClass({

  getInitialState: function() {
    return {
      municipis: municipisStore.getMunicipis()
    }
  },

  componentDidMount: function() {
    this.municipisStoreRemoveToken = municipisStore.addListener(this.updateMunicipis);
    actions.fetchMunicipis();
  },

  componentWillUnmount: function() {
    this.municipisStoreRemoveToken.remove();
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

    return (
      <div>
        <Municipi municipis={this.state.municipis} />
        {/*<Municipi municipis={this.state.municipis} />*/}
      </div>
    )
  }
});

module.exports = MainContainer;