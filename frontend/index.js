var React = require('react');
var render = require('react-dom').render;
var MainContainer = require('./components/MainContainer');

class App extends React.Component {

  render () {
    return <MainContainer />;
  }
}

render(<App/>, document.getElementById('app'));