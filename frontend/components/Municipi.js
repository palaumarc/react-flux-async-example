var React = require('react');
var DadesMunicipi = require('./DadesMunicipi');
var actions = require('../actions/MunicipisActions');
var municipiStore = require('../stores/MunicipiStore');
var municipisStore = require('../stores/MunicipisStore');

var Municipi = React.createClass({

  getInitialState: function() {
    return {
      selectedMunicipiPrediccio: this.props.municipis[0],
      selectedMunicipi: municipisStore.getDefaultMunicipi()
    }
  },

  componentDidMount: function() {
    this.municipiStoreRemoveToken = municipiStore.addListener(this.updateSelectedMunicipi);
  },

  componentWillUnmount: function() {
    this.municipiStoreRemoveToken.remove();
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
  },

  updateSelectedMunicipi: function() {
    this.setState({
      selectedMunicipi: municipiStore.getSelectedMunicipi()
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

    actions.selectMunicipi(this.props.municipis[indexOfSelectedMunicipi]);
  },

  render: function() {

    var divStyle = { float : 'left' };
    var defaultSelectValue = 0;
    var nomComarca = this.state.selectedMunicipi.comarca ? this.state.selectedMunicipi.comarca.nom : '';

    var listItems = this.props.municipis.map((municipi, index) => {

      if (municipi.codi === this.state.selectedMunicipi.codi) {
        defaultSelectValue = index
      }
      return <option key={index} value={index}>{municipi.nom}</option>

    });


    return (
      <div style={divStyle}>
        <h2>Municipi:</h2>
        <select defaultValue={defaultSelectValue} onChange={this.selectChangeHandler}>
          {listItems}
        </select>
        <h2>Comarca:</h2>
        {nomComarca}
        {/*<DadesMunicipi municipi={this.state.selectedMunicipiPrediccio}/>*/}
      </div>
    )
  }
});

module.exports = Municipi;