import React from 'react';

class NewPoemForm extends React.Component {

  state = {
    title: "",
    content: ""
  }

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleChangeContent = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  newPoemCallback = (event) => {
    event.preventDefault()
    return this.props.postNewPoem(this.state.title, this.state.content)
  }

  render(){
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={this.newPoemCallback}>
          <input onChange={this.handleChangeTitle} placeholder="Name your masterpiece..." value={this.state.title}/>
          <textarea onChange={this.handleChangeContent} placeholder="Your masterpiece belongs here..." value={this.state.content} />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;