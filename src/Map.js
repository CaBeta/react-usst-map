import React from 'react'
import { Map, Marker } from 'google-maps-react';
import './Map.css';

class MapContainer extends React.Component {
    state = {
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false
    };

    // onMarkerClick = (props, marker) =>
    //     this.setState({
    //         activeMarker: marker,
    //         selectedPlace: props,
    //         showingInfoWindow: true
    //     });

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
                        onClick={this.props.onMarkerClick}
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

export default MapContainer;