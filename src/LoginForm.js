import React from 'react';

class LoginForm extends React.Component {

  state = {
    username: ""
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value 
    })
  }

  loginCallBack = (event) => {
    event.preventDefault()
    console.log(this.state.username)
    this.props.loginChange(this.state.username)
  }

  render(){
    return (
      <div className="login">
        <form onSubmit={this.loginCallBack} className="login-form" >
          <input onChange={this.handleChange} placeholder="Enter a username..." value={this.state.username} />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;