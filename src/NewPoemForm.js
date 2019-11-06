import React from 'react';


class NewPoemForm extends React.Component {

  state = {
    author: "",
    title: "",
    content: "",
  }

  handleChange = (event) => {
    this.setState({author: this.props.username})
    event.persist()
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = (event) => {
    console.log(this.state)
    debugger
    event.persist()
    event.preventDefault()

    fetch("http://localhost:3000/poems", {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
      .then(response => response.json())
      .then(data => console.log(data))
    } 

  render(){
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={this.handleSubmit}>
          <input placeholder="Name your masterpiece..." name="title" onChange={this.handleChange}/>
          <textarea placeholder="Your masterpiece belongs here..." />
          <input type="submit" value="Share your masterpiece" name="content" onChange={this.handleChange}/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;