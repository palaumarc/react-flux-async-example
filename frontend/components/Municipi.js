var React = require('react');
var DadesMunicipi = require('./DadesMunicipi');
var actions = require('../actions/MunicipisActions');

var Municipi = React.createClass({

  selectChangeHandler: function(e) {
    var selectedMunicipiCodi = e.target.value;
    actions.selectMunicipi(this.props.selectorId, selectedMunicipiCodi);
  },

  render: function() {

    var divStyle = { float : 'left' };
    var defaultSelectValue = 0;
    var nomComarca = '';

    var listItems = this.props.municipis.map((municipi, index) => {

      if (municipi.codi === this.props.selectedMunicipiCodi) {
        defaultSelectValue = municipi.codi;
        nomComarca = municipi.comarca.nom;
      }

      return <option key={index} value={municipi.codi}>{municipi.nom}</option>
    });

    return (
      <div style={divStyle}>
        <h2>Municipi:</h2>
        <select value={defaultSelectValue} onChange={this.selectChangeHandler}>
          {listItems}
        </select>
        <h2>Comarca:</h2>
        {nomComarca}
      </div>
    )
  }
});

module.exports = Municipi;