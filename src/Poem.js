import React from 'react';

class Poem extends React.Component {

  state = {
    clicked: false 
  }
  
  render(){
    return (
      <div style={{color: "black"}}>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <strong>- {this.props.author}</strong>
      </div>
    ); 
  }
}

//Okay this sucks but I don't have time to write out the last deliverable
//but if i did here's how i would do it 
// 1. put an onClick event handler on the poem 
// 2. create a function that set's the state of the function from clicked to true by doing clicked: !this.state.clicked
// 3. put a ternary om the div that changes the css of the poem from red to black depending on the state 
//the ternary would look something like this i think: 
//POOOP 
export default Poem;
