import React from 'react'
import { Link } from 'react-router-dom'
import './List.css';

class List extends React.Component {
    state={

    }
    render(){
        return(
            <div id="location-list">
            {this.props.location.map((item)=>(
                <div className="location-item" key={item.name}>
                    <Link to={'/'+item.id}><h2>{item.name}</h2></Link>
                </div>
            ))}
            </div>
        );
    }
}

export default List;