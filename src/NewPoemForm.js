import React from 'react';
import Poem from './Poem';

class NewPoemForm extends React.Component {
  handleOnsubmit = (e)=>{
    e.preventDefault()
    const user = e.target[0].value
    const title = e.target[1].value
    const content = e.target[2].value

    const poem = {author: user, title: title, content: content}
    console.log(poem)
    this.props.addPoems(poem)
    

  }
  render(){
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={this.handleOnsubmit}>
          <input defaultValue={this.props.username}/>
          <textarea placeholder="Title..." />
          <textarea placeholder="Your masterpiece belongs here..." />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;