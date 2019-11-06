import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {
  renderPoems = () => { 
    return (this.props.allPoems.map(
      poem => <Poem key={poem.id} 
                    title={poem.title} 
                    content={poem.content} 
                    author={poem.author}/>))
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