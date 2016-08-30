var React = require('react');
var Municipi = require('./Municipi')

var MainContainer = React.createClass({

  getInitialState: function() {
    return {
      municipis: []
    }
  },

  componentDidMount: function() {
    fetch('/municipis/metadades')
    .then((response) => {
      return response.json();
    })
    .then((receivedMetadata) => {
      this.setState({
        municipis: receivedMetadata
      })
    });
  },

  render: function() {

    return (
      <div>
        <Municipi municipis={this.state.municipis} />
        <Municipi municipis={this.state.municipis} />
      </div>
    )
  }
});

module.exports = MainContainer;