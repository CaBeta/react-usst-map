import React from 'react'
import './List.css';

class List extends React.Component {
    state={

    }
    render(){
        return(
            <div id="location-list">
            {this.props.location.map((item)=>(
                <div className="location-item" key={item.id}>
                    <h2>{item.name}</h2>
                </div>
            ))}
            </div>
        );
    }
}

export default List;