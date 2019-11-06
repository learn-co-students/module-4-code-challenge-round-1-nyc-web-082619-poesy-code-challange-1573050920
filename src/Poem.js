import React from 'react';

class Poem extends React.Component {

  state = {
    color: "black"
  }

  handleClick = () => {
    console.log(this.state.color)
    if (this.state.color === "black"){
      this.setState({color: "red"})
    } else if (this.state.color === "red"){
      this.setState({color: "black"})
    }
  }
  render(){
    console.log(this.state.color)
  
    return (
      <div style={{color: `${this.state.color}` }} key={this.key} onClick={this.handleClick}>
        <h3>{this.props.poemTitle}</h3>
        <p>{this.props.poemContent}</p>
        <strong>- By {this.props.poemAuthor}</strong>
      </div>
    ); 
  }
}

export default Poem;
