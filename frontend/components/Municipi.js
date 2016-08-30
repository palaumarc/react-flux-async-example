var React = require('react');
var DadesMunicipi = require('./DadesMunicipi')

var Municipi = React.createClass({

  getInitialState: function() {
    return {
      selectedMunicipiPrediccio: this.props.municipis[0],
      selectedMunicipi: {}
    }
  },

  componentWillReceiveProps(nextProps) {
    fetch('/municipis/' + nextProps.municipis[0].codi)
    .then((response) => {
      return response.json();
    })
    .then((prediccio) => {
      this.setState({
        selectedMunicipiPrediccio: prediccio
      })
    });

    this.setState({
      selectedMunicipi: nextProps.municipis[0]
    })
  },

  selectChangeHandler: function(e) {
    var indexOfSelectedMunicipi = e.target.value;

    fetch('/municipis/' + this.props.municipis[indexOfSelectedMunicipi].codi)
    .then((response) => {
      return response.json();
    })
    .then((prediccio) => {
      this.setState({
        selectedMunicipiPrediccio: prediccio
      })
    });

    this.setState({
      selectedMunicipi: this.props.municipis[indexOfSelectedMunicipi]
    })
  },

  render: function() {

    var divStyle = { float : 'left' };

    var listItems = this.props.municipis.map((municipi, index) => (
      <option key={index} value={index}>{municipi.nom}</option>
    ));

    var nomComarca = this.state.selectedMunicipi.comarca ? this.state.selectedMunicipi.comarca.nom : '';

    return (
      <div style={divStyle}>
        <h2>Municipi:</h2>
        <select onChange={this.selectChangeHandler}>
          {listItems}
        </select>
        <h2>Comarca:</h2>
        {nomComarca}
        <DadesMunicipi municipi={this.state.selectedMunicipiPrediccio}/>
      </div>
    )
  }
});

module.exports = Municipi;