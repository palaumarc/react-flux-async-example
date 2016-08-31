var React = require('react');

var PrediccioMunicipi = React.createClass({

  render: function() {

    return (
      <div>
        <h3>Codi:</h3>
        {this.props.prediccio.codi}
        <h3>Dia1:</h3>
        {this.props.prediccio.dies[0].variables.precipitacio.valor}
        <h3>Dia2:</h3>
        {this.props.prediccio.dies[1].variables.precipitacio.valor}
      </div>
    )
  }
});

module.exports = PrediccioMunicipi;