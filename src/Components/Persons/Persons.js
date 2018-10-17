
import React, {Component} from 'react';
import Person from './Person/Person.js'

const Persons = (props)=>{
    return(
            props.person.map((m,index)=>{
                return(
                  <Person 
                   click = {() => props.clicked(index)}
                    name={m.name} 
                    age={m.age}
                    key={m.id}
                    change_data = {(event)=>props.changed(event, m.id)}
                  />
                )
                
                
              })
    )
}


export default Persons