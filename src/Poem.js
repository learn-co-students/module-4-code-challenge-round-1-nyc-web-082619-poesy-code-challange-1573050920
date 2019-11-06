import React from 'react';

class Poem extends React.Component {
  state = ({
    clicked: false,
  })

  handleOnClick = () => {
    this.setState(prevState=>({
      clicked: !prevState.clicked
    }))
  }

  render(){
    console.log(this.props)
    return (
      <div style={{color: `${this.state.clicked? 'red' : 'black'}`}} onClick={this.handleOnClick} >
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <strong>- {this.props.author}</strong>
      </div>
    ); 
  }
}

export default Poem;
