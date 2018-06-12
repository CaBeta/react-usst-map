import React from 'react'
import './List.css';

class List extends React.Component {
    state={

    }
    render(){
        return(
            <div id="location-list">
                <div className="location-item">
                    <h2>一食堂</h2>
                    <p>有一楼和二楼，二楼有面条，里面有高端餐厅虽然我没进去过</p>
                </div>
                <div className="location-item">
                    <h2>二食堂</h2>
                    <p>一楼下课挤爆，二楼中午是教师食堂</p>
                </div>
                <div className="location-item">
                    <h2>五食堂</h2>
                    <p>很大，二楼很多小吃</p>
                </div>
                <div className="location-item">
                    <h2>六食堂</h2>
                    <p>比较大，旁边有两个小食堂，好像也有二楼但是我没去过</p>
                </div>
            </div>
        );
    }
}

export default List;