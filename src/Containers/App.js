import React, { Component } from 'react';

import './App.css';
import Persons from '../Components/Persons/Persons.js';
import '../Components/Persons/Person/Person.css';
import ClickMe from '../ClickAgain/ClickMe.js';
import Cockpit from '../Components/Cockpit/Cockpit.js';

class App extends Component {
  state = {
    persons : [
      {name:'sreerag',age:26, id:'1'},
      {name:'ravindran',age:26, id:'2'},
      {name:'druv raj',age:10, id:'3'}
    ],
    otherState :'other value',
    displayName :'',
    isShow: false,
    titleMsg:"My firt react app with redux"
  }

  nameChanegeHandler = (event)=>{
    this.setState({persons: [
      {name:event.target.value,age:26},
      {name:event.target.value,age:26},
      {name:event.target.value,age:10}
    ]})
  }

  showHideHandler = ()=>{
    const isShowing = !this.state.isShow;
    this.setState({
      isShow:isShowing
    });

  }

  
  deletePersonHandler = (personIndex)=>{
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({
      persons:persons
    })
  }

  tb_changeHandler = (event, id)=> {
    const personsIndex = this.state.persons.findIndex(m=> m.id===id);
    
    const pers = {
      ...this.state.persons[personsIndex]
    }

    pers.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personsIndex] = pers;

    this.setState({
      persons:persons
    });
    
    console.log(personsIndex);

  }


  render() {
    
    
    return (
      <div className="App">
        <Cockpit 
          showHideHandler={this.showHideHandler}
          titleMsg={this.state.titleMsg}/>
        {
          this.state.isShow 
          ? <Persons person={this.state.persons} clicked={this.deletePersonHandler} changed={this.tb_changeHandler}/> 
          : <ClickMe/>
        }
        
      </div>
      
    );

    // return React.createElement('div',{className:'App'}, 
    //   React.createElement('h1',null,'Hi I am sreerag'));
  }
}

export default App;
