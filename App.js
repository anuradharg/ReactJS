import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas:[
      {name:'Ryu', age:20 , belt:'black', id:1 },
      {name:'Yoshi', age:30 , belt:'green', id:2 },
      {name:'Crystal', age:28 , belt:'yellow', id:3 }
    ]
  }

    addNinja = (ninja) => {
        //console.log(ninja)
        ninja.id = Math.random();
        let ninjas = [...this.state.ninjas, ninja];

        this.setState({
            ninjas: ninjas
        })
    }

    /*
    deleteNinja = (id) => {
        let ninjas = this.state.ninjas.filter(ninja => {
           return ninja.id !== id
        })
    }
    */

    deleteNinja = (id) => {
        // console.log(id);
        let ninjas = this.state.ninjas.filter(ninja => {
            return ninja.id !== id
        });
        this.setState({
            ninjas: ninjas
        });
    }

  render() {
    return (
      <div className="App">
        <h1>My First React App!</h1>
        <p>Welcome :)))</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
          <br/>
          <AddNinja addNinja={this.addNinja}/>
      </div>  
    );
  }
}

export default App;
