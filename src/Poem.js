import React from 'react';
import PoemsContainer from './PoemsContainer';

class Poem extends React.Component {
  state = {
    read: false
  }

  handleOnClick = () => {
    this.setState({read: !this.state.read})
  }

  render(){
    const{title, content, author} = this.props.poem
    const color = this.state.read? "red" : "black"
    return (
      <div onClick={this.handleOnClick} style={{color: color}}>
        <h3>{title}</h3>
        <p>{content}</p>
        <strong>- By {author}</strong>
      </div>
    ); 
  }
}

export default Poem;
