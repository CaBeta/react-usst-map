import React from 'react'
import { Link } from 'react-router-dom'
import './List.css';

function List(props){
    return(
        <div id="location-list">
        {props.location.map((item)=>(
            <div className="location-item" role="link" key={item.name}>
                <Link to={'/'+item.id}><h2>{item.name}</h2></Link>
            </div>
        ))}
        </div>
    );
}

export default List;