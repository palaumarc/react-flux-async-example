var React = require('react');
var PrediccioMunicipi = require('./PrediccioMunicipi');
var actions = require('../actions/MunicipisActions');
var activeDayStore = require('../stores/ActiveDayStore');

var Municipi = React.createClass({

  getInitialState: function() {
    return {
      indexOfActiveDay: activeDayStore.getActiveDay(this.props.selectorId)
    }
  },

  // shouldComponentUpdate: function(nextProps, nextState) {
  //   return nextProps.selectedMunicipiCodi !== this.props.selectedMunicipiCodi;
  // },

  componentDidMount: function() {
    this.activeDayStoreRemoveToken = activeDayStore.addListener(this.updateActiveDay);
  },

  componentWillUnmount: function() {
    this.activeDayStoreRemoveToken.remove();
  },

  updateActiveDay: function() {
    this.setState({
      indexOfActiveDay: activeDayStore.getActiveDay(this.props.selectorId)
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

    if (this.props.prediccio) {
      prediccioMunicipiComponent = <PrediccioMunicipi 
                                      selectorId={this.props.selectorId} 
                                      prediccio={this.props.prediccio} 
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