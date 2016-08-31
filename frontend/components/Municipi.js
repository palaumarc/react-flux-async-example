var React = require('react');
var PrediccioMunicipi = require('./PrediccioMunicipi');
var actions = require('../actions/MunicipisActions');
var prediccioStore = require('../stores/PrediccioStore');

var Municipi = React.createClass({

  // shouldComponentUpdate: function(nextProps, nextState) {
  //   return nextProps.selectedMunicipiCodi !== this.props.selectedMunicipiCodi;
  // },

  selectChangeHandler: function(e) {
    var selectedMunicipiCodi = e.target.value;
    actions.selectMunicipi(this.props.selectorId, selectedMunicipiCodi);
  },

  render: function() {

    var divStyle = { float : 'left' , marginLeft : '5%'};
    var defaultSelectValue = 0;
    var selectedMunicipi = '';

    var listItems = this.props.municipis.map((municipi, index) => {

      if (municipi.codi === this.props.selectedMunicipiCodi) {
        defaultSelectValue = municipi.codi;
        selectedMunicipi = municipi;
      }

      return <option key={index} value={municipi.codi}>{municipi.nom}</option>
    });

    var prediccioMunicipiComponent = '';

    if (this.props.prediccio) {
      prediccioMunicipiComponent = <PrediccioMunicipi prediccio={this.props.prediccio} />
    }

    return (
      <div style={divStyle}>
        <h2>Municipi</h2>
        <select value={defaultSelectValue} onChange={this.selectChangeHandler}>
          {listItems}
        </select>
        <h2>Comarca</h2>
        {selectedMunicipi.comarca.nom}
        {prediccioMunicipiComponent}
      </div>
    )
  }
});

module.exports = Municipi;