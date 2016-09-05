var React = require('react');
var PrediccioMunicipi = require('./PrediccioMunicipi');
var actions = require('../actions/MunicipisActions').actions;
var prediccioMunicipiStore = require('../stores/PrediccioMunicipiStore');

var Municipi = React.createClass({

  getInitialState: function() {
    return {
      indexOfActiveDay: prediccioMunicipiStore.getActiveDay(this.props.selectorId),
      prediccio: prediccioMunicipiStore.getPrediccioMunicipi(this.props.selectorId)
    }
  },

  componentDidMount: function() {
    this.prediccioMunicipiStoreRemoveToken = prediccioMunicipiStore.addListener(this.updateState);
  },

  componentWillUnmount: function() {
    this.prediccioMunicipiStoreRemoveToken.remove();
  },

  updateState: function() {
    this.setState({
      indexOfActiveDay: prediccioMunicipiStore.getActiveDay(this.props.selectorId),
      prediccio: prediccioMunicipiStore.getPrediccioMunicipi(this.props.selectorId)
    });
  },

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

    if (this.state.prediccio) {
      prediccioMunicipiComponent = <PrediccioMunicipi 
                                      selectorId={this.props.selectorId} 
                                      prediccio={this.state.prediccio} 
                                      indexOfActiveDay={this.state.indexOfActiveDay || 0}
                                    />
    }

    return (
      <div className="form-group" style={divStyle}>
        <h2>Municipi</h2>
        <select className="form-control" value={defaultSelectValue} onChange={this.selectChangeHandler}>
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