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
  render() {
    return (
      <div className="App">
        <h1>My First React App!</h1>
        <p>Welcome :)))</p>
        <Ninjas ninjas = {this.state.ninjas} />
          <br/>
          <AddNinja/>
      </div>  
    );
  }
}

export default App;
