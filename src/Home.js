import React from 'react';
import List from './List'
import Filter from './Filter'

class Home extends React.Component {
    render(){
        return(
            <div>
                <Filter changeBlock={this.props.changeBlock} changeType={this.props.changeType}/>
                <List location={this.props.location}/>
            </div>
        )
    }
}

export default Home