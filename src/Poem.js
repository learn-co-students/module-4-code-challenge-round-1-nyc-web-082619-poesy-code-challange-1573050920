import React from 'react';

class Poem extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = event => {
    this.setState({clicked: !this.state.clicked})
  }

  render(){
    return (
      <div onClick={this.clickHandler} style={(this.state.clicked ? {color: "red"} : {color: "black"})}>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <strong>- By {this.props.author}</strong>
      </div>
    ); 
  }
}

export default Poem;

