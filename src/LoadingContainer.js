import React, { Component } from 'react';

class LoadingContainer extends Component {
    state = {
        warn:''
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                warn:'如果一直是这样 emmmm 那么可能你没有科学上网，请检查一下'
            })
        }, 3000);
    }
    render(){
        return(
            <div>
                <p>欢迎使用USST地图助手</p>
                <p>{this.state.warn}</p>
            </div>
        )
    }
}

export default LoadingContainer