import React from 'react';
import { EventEmitter } from 'events';

class LoginForm extends React.Component {

  state = {
    username: ""
  }

  handleClick = (event) => {
    this.setState({username: event.target.value})

  }
  handleSubmit = (event) => {
    event.persist()
    event.preventDefault()
    this.props.setName(this.state.username)
    this.props.loggedIn(event)
  }
  render(){
    console.log(this.state)
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.handleSubmit} value={this.state.username}>
          <input placeholder="Enter a username..." onChange={this.handleClick}/>
          <input type="submit" value="Log In"/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;