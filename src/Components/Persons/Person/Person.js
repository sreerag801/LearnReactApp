import React, {Component} from 'react';

class person extends React.Component {
    

    render(){
        return(
            <div className="div-persons">
                <h1 className="Person">My name is {this.props.name}</h1>
                <h2 onClick={this.props.click}>My age is {this.props.age}</h2>
                <input type="text" onChange={this.props.change_data} value={this.props.name}/>
                <div>
                    Name confirmation : {this.props.name}
                </div>
    
            </div>
            
        )
    }
    
}

export default person;