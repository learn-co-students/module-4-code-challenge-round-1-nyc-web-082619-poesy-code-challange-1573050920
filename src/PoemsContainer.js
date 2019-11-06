import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {


  render(){
    console.log(this.props)
    return (
      <div className="poems-container">
        
          {this.props.poems.map(poem => {
              return <Poem
              
              key={poem.id}
              poemTitle={poem.title}
              poemContent={poem.content}
              poemAuthor={poem.author}
            />
          })}
      </div>
    ); 
  }
}

export default PoemsContainer;