var React = require('react');
var DadesMunicipi = require('./DadesMunicipi')

var Municipi = React.createClass({

  getInitialState: function() {
    return {
      selectedMunicipi: this.props.municipis[0]
    }
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedMunicipi: nextProps.municipis[0]
    })
  },

  selectChangeHandler: function(e) {
    var selectedMunicipiId = e.target.value;
    var selectedMunicipi = this.props.municipis.filter(function(municipi) {
      return municipi.codi === selectedMunicipiId;
    })

    this.setState({
      selectedMunicipi: selectedMunicipi[0]
    })
  },

  render: function() {

    var listItems = this.props.municipis.map((municipi, index) => (
      <option key={index} value={municipi.codi}>{municipi.nom}</option>
    ));

    return (
      <div>
        <h2>Municipi:</h2>
        <select onChange={this.selectChangeHandler}>
          {listItems}
        </select>
        <DadesMunicipi municipi={this.state.selectedMunicipi}/>
      </div>
    )
  }
});

module.exports = Municipi;