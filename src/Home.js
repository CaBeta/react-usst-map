import React from 'react';
import List from './List'
import Filter from './Filter'

function Home(props){
    return(
        <React.Fragment>
            <Filter
                block={props.block}
                type={props.type}
                changeBlock={props.changeBlock}
                changeType={props.changeType}
            />
            <List location={props.location}/>
        </React.Fragment>
    )
}


export default Home