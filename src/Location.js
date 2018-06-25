import React from 'react';
import fetchJsonp from 'fetch-jsonp';
import './Location.css';

function Geocoder(props){
    return <p className="geocoder">{props.address}</p>
}

class Location extends React.Component {
    state={
        loc:{},
        geocoder:{}
    }
    componentWillMount=()=>{
        this.setState({
            // eslint-disable-next-line
            loc: this.props.location.filter((item) => item.id == this.props.match.params.number)[0]
        })
    }
    componentDidMount() {
        if (!this.state.loc){return;}
        const latlng = this.state.loc.latlng;

        // 传入该地点经纬度 异步获取百度地图地理逆编码数据
        fetchJsonp(`http://api.map.baidu.com/geocoder/v2/?location=${latlng.lat},${latlng.lng}&output=json&ak=u26WKmbPmhsjNL2mDC2LWKyr9gX88GEv`, {
            headers: { Accept: 'application/json', },
            jsonpCallback: 'callback'
        }).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ geocoder: data.result })
        }).catch((error) => {
            console.log(error);
        })
    }
    render(){
        return(
            this.state.loc? (
            <div id="detail-main">
                <div id="detail-location">
                    <h2>{this.state.loc.name}</h2>
                    <Geocoder address={this.state.geocoder.formatted_address}/>
                    <div className="location-img">
                        <img src={this.state.loc.photograph.highLevel} alt={this.state.loc.name}/>
                    </div>
                    <p id="open-time">{this.state.loc.operating_hours}</p>
                </div>
                <div id="detail-review">
                <div id="review-title">评论</div>
                    {this.state.loc.reviews.map((review)=>(
                        <div className="review-detail" key={review.name+review.date}>
                            <p id="name">{review.name}</p>
                            <p id="comments">{review.comments}</p>
                            <p id="date">{review.date}</p>
                        </div>
                    ))}
                </div>
            </div>):(<div>发生了一些错误</div>)
        )
    }
}

export default Location;