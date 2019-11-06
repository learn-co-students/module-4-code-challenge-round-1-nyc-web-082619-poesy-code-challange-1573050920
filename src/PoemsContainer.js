import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {
  handlePoems = () => {
    return this.props.poems.map(poem => <Poem key={poem.id} poem={poem} />)
  }
  render(){
    return (
      <div className="poems-container">
        {
         this.handlePoems()
        }
      </div>
    ); 
  }
}

export default PoemsContainer;