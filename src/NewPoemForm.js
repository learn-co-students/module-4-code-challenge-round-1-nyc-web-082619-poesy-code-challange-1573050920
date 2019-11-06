import React from 'react';

class NewPoemForm extends React.Component {

  //thought about making a container for the form to hold the state, but seemed a little overkill//
  
  state={
    title: "",
    content: ""
  }

  handleInput = (event, state) => {
    this.setState({
      [state]: event.target.value
    })
  }

  handleSubmit = (event) => {
    const { title, content } = this.state
    event.preventDefault()
    this.props.addPoem(title, content)
  }

  render(){
    return (
      <div className="new-poem">
        <form onSubmit={this.handleSubmit} className="new-poem-form">
          <input value={this.state.title} onChange={event=>this.handleInput(event, "title")} placeholder="Name your masterpiece..." />
          <textarea value={this.state.content} onChange={event=>this.handleInput(event, "content")} placeholder="Your masterpiece belongs here..." />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;