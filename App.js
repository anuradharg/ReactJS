import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My First React App!</h1>
        <p>Welcome :)))</p>
        <Ninjas/>
      </div>  
    );
  }
}

export default App;