import React from 'react';
import {render} from 'react-dom';
import MainContainer from './components/MainContainer'

class App extends React.Component {

  render () {
    return <MainContainer />;
  }
}

render(<App/>, document.getElementById('app'));