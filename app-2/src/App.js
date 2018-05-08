import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      friends: ["Billy",'Bobby','Teddy','Elroy']
    }
  };
    
  render(){
    let listOfFriends = this.state.friends.map((value,index)=>{
    return(
      <h2>{value}</h2>
    )
  });

    return(
      <div className = "App">
      {listOfFriends}
      </div>
    )
  }
};

export default App;
