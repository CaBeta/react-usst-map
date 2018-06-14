import React from 'react'
import './Filter.css';

class Filter extends React.Component {
    render(){
        return(
            <select id="filter">
                <option value="restaurant">食堂</option>
                <option value="classroom">教学楼</option>
            </select>
        )
    }
}

export default Filter;