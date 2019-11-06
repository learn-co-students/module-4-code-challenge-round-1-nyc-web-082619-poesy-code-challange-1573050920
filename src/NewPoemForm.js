import React from 'react';

class NewPoemForm extends React.Component {

  state={
    newPoemTitle: "",
    newPoemContent: ""
  }

  getNewPoemTitle= (event) => {
      this.setState({
            newPoemTitle: event.target.value
      })
  }

  getnewPoemContent= (event) => {
      this.setState({
      newPoemContent: event.target.value
      })
  }

  render(){
    return (
      <div className="new-poem">
        <form className="new-poem-form">
          <input placeholder="Name your masterpiece..." 
          onChange={(event) => this.getNewPoemTitle(event)} value={this.state.newPoemTitle} />
      
          <textarea placeholder="Your masterpiece belongs here..." 
          onChange={(event) => this.getnewPoemContent(event)} value={this.state.newPoemContent}/>

          <input type="submit" value="Share your masterpiece" onClick={event => this.props.submitNewPoem(event, this.state.newPoemTitle, this.state.newPoemContent)}/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;