import React from 'react';

class NewPoemForm extends React.Component {

  state = {
    poemTitle: null,
    poemText: null
  }


  handleSubmit = event => {
    // clear the fields the lazy way and not running event.preventDefault()
    this.props.postPoem(this.state.poemTitle, this.state.poemText)
  }


  handleTitleChange = (event) => {
    this.setState({poemTitle: event.target.value});
  }

  handleTextChange = (event) => {
    this.setState({poemText: event.target.value});
  }

//author is state in app

  render(){
    return (
      <div className="new-poem">
        <form onSubmit={this.handleSubmit} className="new-poem-form">
          <input value={this.state.poemTitle} onChange={this.handleTitleChange} placeholder="Name your masterpiece..." />
          <textarea value={this.state.poemText} onChange={this.handleTextChange} placeholder="Your masterpiece belongs here..." />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;
