import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      filterText:'',
      places: ["Illinois",'Florida','Missouri','Texas']
    }
  };

  handleChange(value){
    this.setState({filterText:value})
  }
    
  render(){
    let listOfPlaces = this.state.places.filter((value,index)=>{
    return value.includes (this.state.filterText);
  }).map((element, index) => {
    return <h2 key={index}>{element}</h2>
  })

    return(
      <div className = "App">
      <input onChange={(e)=>this.handleChange(e.target.value) } ></input>
      {listOfPlaces}
      </div>
    )
  }
};

export default App;
