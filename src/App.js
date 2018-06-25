import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import './App.css';
import Home from './Home';
import Location from './Location';

import MapContainer from './Map'

class App extends Component {
  state = {
    location:[],
    block:'',
    type:''
  }
  componentDidMount(){
    fetch("http://localhost:3000/data/location.json").then((response)=>{
      return response.json();
    }).then((data)=>{
      this.setState({
        location:data.location
      });
    }).catch((error)=>{
      console.log(error);
    })
  }
  onChangeBlock = (block) => {
    this.setState({
      block:block
    })
    if (block === "all") {
      this.setState({
        block: ""
      })
    }
  }
  onChangeType = (type) => {
    this.setState({
      type:type
    })
    if (type === "all") {
      this.setState({
        type: ""
      })
    }
  }
  onMarkerClick = () =>{
  }
  render() {
    // 通过下拉栏对地点进行筛选
    // 如果block和type为空字符串则保留所有的地点 否则按照相应的block和type进行筛选
    const filteredLocation = this.state.location.filter((item) => this.state.block === '' || item.block === this.state.block)
      .filter((item) => this.state.type === '' || item.type === this.state.type);
    return (
      <div className="App">
        <header className="App-header">
          <Route path='/:number' render={() => (
            <Link to="/" className="back"/>
          )} />
          <Link to="/"><h1 className="App-title">Welcome to USST</h1></Link>
        </header>
        <div id="map-container" role="application">
          <MapContainer markers={filteredLocation} onMarkerClick={this.onMarkerClick} />
        </div>
        <Switch>
          <Route exact path='/' render={() => (
            <Home
              block={this.state.block}
              type={this.state.type}
              location={filteredLocation}
              changeBlock={this.onChangeBlock}
              changeType={this.onChangeType}
            />
          )} />
          <Route path='/:number' render={({match}) => (
            <Location
              match={match}
              location={filteredLocation}
            />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App
