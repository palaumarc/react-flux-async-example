var React = require('react');
var actions = require('../actions/MunicipisActions');
var moment = require('moment');

var PrediccioMunicipi = React.createClass({

  handleTabChange: function(event) {
    var indexOfActiveDay = event.target.id;
    actions.changeActiveDay(this.props.selectorId, indexOfActiveDay);
  },

  render: function() {

    var imgStyle = {};
    
    
    var divStyle = {
      margin: "5px"
    };

    var tabsOfdays = this.props.prediccio.dies.map((dia, index) => {

      var formattedDate = moment(dia.data).format('DD/MM/YYYY'); 
     
        return (            
          <li key={index} onClick={this.handleTabChange} className={this.props.indexOfActiveDay == index ? 'active' : null}> 
            <a href="#" id={index}> {formattedDate} </a>
          </li>
        );
      });

    var informacioDiaSeleccionat = this.props.prediccio.dies[this.props.indexOfActiveDay].variables;

    var barStyle = {
      width: informacioDiaSeleccionat.precipitacio.valor + "%"
    };

    return (
      <div>
        <ul className="nav nav-tabs">
          { tabsOfdays }
        </ul>   
        <section>
          <h3>Temperatura:</h3>
          <h4 className="panel-body">{informacioDiaSeleccionat.tmin.valor} {informacioDiaSeleccionat.tmin.unitats}</h4>
          <h4 className="panel-body">{informacioDiaSeleccionat.tmax.valor} {informacioDiaSeleccionat.tmax.unitats}</h4>
          <img src={'./img/' + informacioDiaSeleccionat.estatCel.simbol + '.png'} />

          <h3>Precipitació:</h3>
          <div className="progress" style={divStyle}>
            <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={barStyle}>
            {informacioDiaSeleccionat.precipitacio.valor} {informacioDiaSeleccionat.precipitacio.unitat}
            </div>
          </div>
        </section>
      </div>
    )
  }
});

module.exports = PrediccioMunicipi;