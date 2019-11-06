import React from 'react';

class NewPoemForm extends React.Component {
  state = {


    title: "",

    content: "",

    author: this.props.username

  }

  formChange = (event) => {
    this.setState({[event.target.name]: event.target.value })
  }

  formSubmit = (event) => {
    event.preventDefault()
    this.props.addPoem(this.state)


  }


  render(){
    console.log(this.state.title)
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={this.formSubmit}>
          <input placeholder="Name your masterpiece..." name="title" value={this.state.title} onChange={this.formChange}/>
          <textarea placeholder="Your masterpiece belongs here..." name="content" value={this.state.content} onChange={this.formChange}/>
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;