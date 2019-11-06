import React from 'react';

class Poem extends React.Component {

  state={
    color: false
  }

  markAsRead= () => {
      this.setState({
          color: !this.state.color
      })
   }

  render(){
    return (
      <div onClick={this.markAsRead} 
      style={this.state.color ?{color: "red"} : {color: "black"}} >

        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <strong>- By {this.props.author}</strong>
      </div>
    ); 
  }
}

export default Poem;
