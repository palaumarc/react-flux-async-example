var React = require('react');
var Municipi = require('./Municipi')

var MainContainer = React.createClass({

  render: function() {
    return (
      <div>
        <Municipi />
      </div>
    )
  }
});

module.exports = MainContainer;