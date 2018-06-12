import React from 'react'
import './Map.css';

class Map extends React.Component {
    state={
        map:{
            center: {
                lat: 31.2926931712,
                lng: 121.5559310935
            },
            zoom:16
        },
        library:{ lat: 31.295187, lng: 121.554338 }

    }
    componentDidMount(){
        var map = new window.google.maps.Map(
            this.refs.map,
            this.state.map
        );
        new window.google.maps.Marker({
            position: this.state.library,
            map: map,
            title: 'USST library'
        })
    }
    render(){
        return(
            <div ref="map" id="map"></div>
        );
    }
}

export default Map;