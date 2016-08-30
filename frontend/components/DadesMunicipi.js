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
        <h3>Nom:</h3>
        {this.props.municipi.nom}
        <h3>Comarca:</h3>
        {this.props.municipi.comarca.nom}
        <h3>Codi:</h3>
        {this.props.municipi.codi}
      </div>
    )
  }
});

module.exports = DadesMunicipi;