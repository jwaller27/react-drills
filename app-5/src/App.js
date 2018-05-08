import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={ "http://static.tvtropes.org/pmwiki/pub/images/john_wayne_cowboy_poster.jpg" } />
      </div>
    );
  }
}

export default App;
