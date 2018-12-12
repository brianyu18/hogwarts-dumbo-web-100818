import React, { Component } from 'react';
import Hog from '../components/Tiles.js'
import hogs from '../porkers_data';

class HogsContainer extends React.Component{
  state = {
    pigs: hogs
  }

  render(){
    let piggies = this.state.pigs.map(pig => {
      return <Hog key={pig.name} pig={pig}/>;
    });
    <div className="App">
        <button onClick={this.alphaSort}>🐖🐖 sort your pigs by name 🐖🐖</button>
        <button onClick={this.weightSort}>🐷🐷 see your fattest pigs 🐷🐷</button>
        <button onClick={this.greasedPig}>🥓🥓 see the greasiest pigs 🥓🥓</button>
        {piggies}
    </div>
  }
}

export default HogsContainer;
