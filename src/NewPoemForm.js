import React from 'react';
import Poem from './Poem';

class NewPoemForm extends React.Component {
  state = {
    title: "",
    content: ""
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getNewPoem(this.state)
    this.setState({title: "", content: ""})
  }

  render(){
    console.log("New Poem State: ",this.state)
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit = {this.handleSubmit}>
          <input name="title" onChange={this.handleChange} value={this.state.title} placeholder="Name your masterpiece..." />
          <textarea name="content" onChange={this.handleChange} value={this.state.content} placeholder="Your masterpiece belongs here..." />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;