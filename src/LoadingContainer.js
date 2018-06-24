import React, { Component } from 'react';

class LoadingContainer extends Component {
    state = {
        warn:''
    }
    componentDidMount(){
        this.warning = setTimeout(() => {
            this.setState({
                warn:'如果一直是这样 emmmm 那么可能你没有科学上网，请检查一下'
            })
        }, 3000);
    }
    componentWillUnmount(){
        clearTimeout(this.warning)
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