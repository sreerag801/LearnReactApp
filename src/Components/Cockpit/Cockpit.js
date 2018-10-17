import React from 'react'
import './Cockpit.css';

const cockpit = (props)=>{
    const style= {
        backgroundColor:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px'
      }
    return(
        <div>
            <h1 className="App-header hello">Hi I'm sreerag</h1>
            <p>Just testing my react app</p>
            <p>{props.titleMsg}</p>
            <input type="text"/>
            <button style={style} onClick={props.showHideHandler}>Click here</button>
        </div>
        
    )
}

export default cockpit;