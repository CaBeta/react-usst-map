import React from 'react';
import './Location.css';

class Location extends React.Component {
    state={
        loc:{}
    }
    componentWillMount=()=>{
        this.setState({
            // eslint-disable-next-line
            loc: this.props.location.filter((item) => item.id == this.props.match.params.number)[0]
        })
    }
    render(){
        return(
            this.state.loc? (
            <div id="detail-main">
                <div id="detail-location">
                    <h2>{this.state.loc.name}</h2>
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