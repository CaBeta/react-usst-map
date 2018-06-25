import React from 'react'
import { Map, Marker } from 'google-maps-react';
import { withRouter } from "react-router-dom";
import { GoogleApiWrapper } from 'google-maps-react';
import LoadingContainer from './LoadingContainer'
import './Map.css';

class MapContainer extends React.Component {
    state = {
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false
    };

    onMarkerClick = (id) =>
        // this.setState({
        //     activeMarker: marker,
        //     selectedPlace: props,
        //     showingInfoWindow: true
        // });
        {
            if(this.props.history.location.pathname === "/"){
                this.props.history.push("/"+id);
            }
        }

    // onInfoWindowClose = () =>
    //     this.setState({
    //         activeMarker: null,
    //         showingInfoWindow: false
    //     });

    render(){
        return(
            <Map
                className="map"
                google={this.props.google}
                style={{ height: 400, position: 'relative', width: '100%' }}
                initialCenter={{
                    lat: 31.2926931712,
                    lng: 121.5559310935
                }}
                zoom={15}>
                {this.props.markers.map((marker)=>(
                    <Marker
                        key={marker.name}
                        name={marker.name}
                        onClick={()=>this.onMarkerClick(marker.id)}
                        position={marker.latlng}
                    />
                ))}

                {/* <InfoWindow
                    marker={this.state.activeMarker}
                    onClose={this.onInfoWindowClose}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow> */}

            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAWfi3_GUqAYyGpn2OlJf9Nd9njHHLfdOo",
    language: "zh-cn",
    LoadingContainer: LoadingContainer
})(withRouter(MapContainer));