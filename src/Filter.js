import React from 'react'
import './Filter.css';

class Filter extends React.Component {
    render(){
        return(
            <div id="filter">
                <select id="block" value={this.props.block} onChange={(event) => this.props.changeBlock(event.target.value)}>
                    <option value="all">所有校区</option>
                    <option value="north">北校区</option>
                    <option value="south">南校区</option>
                </select>
                <select id="type" value={this.props.type} onChange={(event) => this.props.changeType(event.target.value)}>
                    <option value="all">所有建筑</option>
                    <option value="restaurant">食堂</option>
                    <option value="classroom">教学楼</option>
                </select>

            </div>
        )
    }
}

export default Filter;