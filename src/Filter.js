import React from 'react'
import './Filter.css';

function Filter(props){
    return(
        <div id="filter">
            <select id="block" value={props.block} onChange={(event) => props.changeBlock(event.target.value)} aria-label="block-select">
                <option value="all">所有校区</option>
                <option value="north">北校区</option>
                <option value="south">南校区</option>
            </select>
            <select id="type" value={props.type} onChange={(event) => props.changeType(event.target.value)} aria-label="type-select">
                <option value="all">所有建筑</option>
                <option value="restaurant">食堂</option>
                <option value="classroom">教学楼</option>
            </select>

        </div>
    )
}

export default Filter;