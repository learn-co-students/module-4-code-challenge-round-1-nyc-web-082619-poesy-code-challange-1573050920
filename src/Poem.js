import React from 'react';

class Poem extends React.Component {
  state = {
    read: false
  }

  togglePoem = () => {
    this.setState({read: !this.state.read})
  }

  render(){

    console.log(this.state)
    return (
      this.state.read ? 
      <div onClick={this.togglePoem} style={{color: "blue"}}>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <strong>- By {this.props.author}</strong>
      </div>
      :
      <div onClick={this.togglePoem} style={{color: "black"}}>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <strong>- By {this.props.author}</strong>
      </div>
    ); 
  }
}

export default Poem;
