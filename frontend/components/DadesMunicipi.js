var React = require('react');

var DadesMunicipi = React.createClass({

  render: function() {

    if (!this.props.municipi) {
      return (
        <div>
          Loading...
        </div>
      )
    }

    return (
      <div>
        <h3>Codi:</h3>
        {this.props.municipi.codi}
        <h3>Dia1:</h3>
        {this.props.municipi.dies[0].variables.precipitacio.valor}
        <h3>Dia2:</h3>
        {this.props.municipi.dies[1].variables.precipitacio.valor}
      </div>
    )
  }
});

module.exports = DadesMunicipi;