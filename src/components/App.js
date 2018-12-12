import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Tiles from './Tiles'

class App extends Component {
  state={
    pigs:hogs
  }

  alphaSort = () =>{
    let sortedHogs = hogs.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })

    this.setState({
      pigs: sortedHogs
    })
  }

  weightSort = () =>{
    let sortedHogs = hogs.sort(function(a, b){
      if(a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) { return -1; }
      if(a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) { return 1; }
      return 0;
    })

    this.setState({
      pigs: sortedHogs
    })
  }

  greasedPig = () =>{
    let greasyHog = hogs.filter(hog => {
      if(hog.greased === true){
        return hog
      }
    })
    console.log(greasyHog)
    this.setState({
      pigs: greasyHog
    })
  }

  render() {
    let piggies = this.state.pigs.map(pig => {
      return <Tiles pig={pig}/>
    })

    return (
      <div className="App">
          < Nav />
          <button onClick={this.alphaSort}>🐖🐖 sort your pigs by name 🐖🐖</button>
          <button onClick={this.weightSort}>🐷🐷 see your fattest pigs 🐷🐷</button>
          <button onClick={this.greasedPig}>🥓🥓 see the greasiest pigs 🥓🥓</button>

          {piggies}
      </div>
    )
  }
}

export default App;
