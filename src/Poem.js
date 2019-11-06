import React from 'react';

class Poem extends React.Component {

  state = {
    clicked: false
  }

  boxClickHandler = event => {
    this.setState({clicked: !this.state.clicked})
  }


  // faveHandler = event => {
  //   this.props.addToFaves(this)
  // }
  // <button onClick={this.faveHandler}>Add To Faves</button>

  render(){
    return (
      <div onClick={this.boxClickHandler} style={(this.state.clicked ? {color: "red"} : {color: "black"})}>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <strong>- By {this.props.author}</strong>
      </div>
    ); 
  }
}

export default Poem;

