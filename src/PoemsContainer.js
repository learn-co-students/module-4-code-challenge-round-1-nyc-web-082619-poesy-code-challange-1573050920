import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {

  renderPoems = () => {
    if (this.props.poems) {
      return(
        this.props.poems.map(
            poemObj => {
              return(
                <Poem {...poemObj}/>
              )
            }
          )
      )
    }
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
