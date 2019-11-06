import React from 'react';

class Poem extends React.Component {
  
  state = {
    clicked: false
  }

  changeColor = () => {
    this.setState({
      clicked: true
    })
  }


  // trying to make this work: 
  // ( this.state.clicked ? style={{color: "red"} : style={{color: "black"})
  render(){
    return (
      <div onClick={this.changeColor} style={{color: "black"}}>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <strong>{this.props.poem.author}</strong>
      </div>
    ); 
  }
}

export default Poem;
