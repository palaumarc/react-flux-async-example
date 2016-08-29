var React = require('react');

var Municipi = React.createClass({

  render: function() {
    return (
      <div>
        <h2>Municipi:</h2>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <h2>Comarca:</h2>
        <h4>Nom comcarca</h4>
      </div>
    )
  }
});

module.exports = Municipi;