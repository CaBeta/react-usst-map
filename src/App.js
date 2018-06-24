import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { GoogleApiWrapper } from 'google-maps-react';
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
    })
    .catch((error)=>{
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
    console.log("click")
  }
  render() {
    const filteredLocation = this.state.location.filter((item) => this.state.block === '' || item.block === this.state.block)
      .filter((item) => this.state.type === '' || item.type === this.state.type);
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/"><h1 className="App-title">Welcome to USST</h1></Link>
        </header>
        <div id="map-container">
          <MapContainer google={this.props.google} markers={filteredLocation} onMarkerClick={this.onMarkerClick} />
        </div>
        <Switch>
          <Route exact path='/' render={() => (
            <Home
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

export default GoogleApiWrapper({
  apiKey:"AIzaSyAWfi3_GUqAYyGpn2OlJf9Nd9njHHLfdOo",
  language:"zh-cn"
})(App);
