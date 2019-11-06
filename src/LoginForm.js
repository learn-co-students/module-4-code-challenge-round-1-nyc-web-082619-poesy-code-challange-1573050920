import React from 'react';

class LoginForm extends React.Component {
  handleSubmit = (e)=>{
    e.preventDefault()
    this.props.getUsername(e.target[0].value)
  }
  render(){
    return (
      <div className="login" onSubmit={this.handleSubmit}>
        <form className="login-form">
          <input placeholder="Enter a username..." />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;