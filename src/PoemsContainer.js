import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {
  state= ({
    poems:[]
  })

  renderPoems=()=>{
    let poems = [...this.state.poems, ...this.props.submittedPoems]
    console.log("POEM CONTAINER",poems)
    return poems.map(poem => <Poem {...poem} key={poem.id ? poem.id : poems.length++} />)
  }


  render(){
    return (
      <div className="poems-container">
        {this.renderPoems()}
      </div>
    ); 
  }


  componentDidMount(){
    fetch(`http://localhost:3000/poems`)
    .then(response=> response.json())
    .then(data=> this.setState({
      poems:data
    }))
  }


}//

export default PoemsContainer;