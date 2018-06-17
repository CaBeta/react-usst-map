import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import './App.css';
import MapContainer from './Map'
import List from './List'
import Filter from './Filter'

class App extends Component {
  state = {
    defaultLocation:[],
    location:[],
    block:'',
    type:''
  }
  componentDidMount(){
    fetch("http://localhost:3000/data/location.json").then((response)=>{
      return response.json();
    }).then((data)=>{
      this.setState({
        defaultLocation:data.location,
        location:data.location
      });
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  onChangeBlock= (block) => {
    this.setState({
      block:block
    })
    if (block === "all") {
      this.setState({
        block: ""
      })
    }
  }
  onChangeType= (type) => {
    this.setState({
      type:type
    })
    if (type === "all") {
      this.setState({
        type: ""
      })
    }
  }
  render() {
    const filteredLocation = this.state.location.filter((item) => this.state.block === '' || item.block === this.state.block)
      .filter((item) => this.state.type === '' || item.type === this.state.type);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to USST</h1>
        </header>
        <div id="map-container">
          <MapContainer google={this.props.google} markers={filteredLocation}/>
        </div>
        <Filter changeBlock={this.onChangeBlock} changeType={this.onChangeType}/>
        <List location={filteredLocation}/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey:"AIzaSyAWfi3_GUqAYyGpn2OlJf9Nd9njHHLfdOo",
  language:"zh-cn"
})(App);
