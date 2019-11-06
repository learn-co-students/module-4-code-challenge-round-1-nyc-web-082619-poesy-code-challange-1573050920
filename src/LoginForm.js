import React from 'react';

class LoginForm extends React.Component {

  state = {
    usernameFormValue: null
  }

  handleLogin = event => {
    event.preventDefault()
    this.props.setLoggedInUser(this.state.usernameFormValue)
  }

  handleChange = (event) => {
    this.setState({usernameFormValue: event.target.value});
  }

  render(){
    return (
      <div className="login" >
        <form onSubmit={this.handleLogin} className="login-form">
          <input onChange={this.handleChange} value={this.state.usernameFormValue} placeholder="Enter a username..." />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;
