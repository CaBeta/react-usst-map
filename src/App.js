import React, { Component } from 'react';
import './App.css';
import Map from './Map'
import List from './List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to USST</h1>
        </header>
        <Map/>
        <List/>
      </div>
    );
  }
}

export default App;
