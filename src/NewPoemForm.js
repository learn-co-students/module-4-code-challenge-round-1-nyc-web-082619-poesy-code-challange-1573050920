import React from 'react';

class NewPoemForm extends React.Component {
  

  
  render(){
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={this.props.submitNew}>
          <input placeholder="Name your masterpiece..." onChange={this.props.handleChange} name="title" value={this.props.newPoem.title}/>
          <textarea placeholder="Your masterpiece belongs here..." name="content" onChange={this.props.handleChange}/>
          <input type="submit" value="Share your masterpiece" />
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;