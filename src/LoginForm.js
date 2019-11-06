import React from 'react';

class LoginForm extends React.Component {
  render(){
    return (
      <div className="login">
        <form className="login-form" onSubmit = {this.props.handleUserSubmit} >
          <input onChange={this.props.handleUsername} value={this.props.userName} placeholder="Enter a username..." />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;