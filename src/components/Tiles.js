import React from 'react'
// import pigPics from './hog-imgs'
export default class Tiles extends React.Component{
  constructor () {
  super()
  this.state = {
    isHidden: true
    }
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }


  render(){
    const Piginfo = () =>(
      <div>
        <h3 value="hidden">Hog Weight: {this.props.pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h3>
        <h3>Best Medal: {this.props.pig['highest medal achieved']}</h3>
      </div>
    )
    let newImageName = this.props.pig.name.split(' ').join('_').toLowerCase()
    console.log(newImageName)
    return(
      <div className="pigTile">
        <h1>{this.props.pig.name}</h1>
        <img onClick={this.toggleHidden} src={require(`../hog-imgs/${newImageName}.jpg`)} alt="pig"/>
        {!this.state.isHidden && <Piginfo />}
      </div>
    )
  }

}

//use this for hidden toggles (https://eddyerburgh.me/toggle-visibility-with-react)
