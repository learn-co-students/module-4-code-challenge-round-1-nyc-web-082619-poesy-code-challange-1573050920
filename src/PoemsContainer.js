import React from 'react';
import Poem from './Poem';

const PoemsContainer = (props) => {

  const renderPoems=()=>{
    return props.poems.map(poem=>{
      return ( 
      <Poem 
        {...poem} 
        key={poem.id} 
        readPoem={props.readPoem}
        like={props.like}
      />
    )})
  }

    return (
      <div className="poems-container">
        { renderPoems() }
      </div>
    ); 
}

export default PoemsContainer;