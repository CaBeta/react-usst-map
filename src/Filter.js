import React from 'react'
import './Filter.css';

class Filter extends React.Component {
    render(){
        return(
            <div id="filter">
                <select id="block">
                    <option value="all">所有校区</option>
                    <option value="north">北校区</option>
                    <option value="south">南校区</option>
                </select>
                <select id="type">
                    <option value="all">所有建筑</option>
                    <option value="restaurant">食堂</option>
                    <option value="classroom">教学楼</option>
                </select>

            </div>
        )
    }
}

export default Filter;