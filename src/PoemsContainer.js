import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {

  incrementer = 0

  renderPoems=()=>{
    return this.props.poems.map(poem=>{
      return ( 
      <Poem 
        {...poem} 
        key={this.incrementer++} 
        readPoem={this.props.readPoem}
      />
    )})
  }

  render(){
    return (
      <div className="poems-container">
        {
         this.renderPoems()
        }
      </div>
    ); 
  }
}

export default PoemsContainer;