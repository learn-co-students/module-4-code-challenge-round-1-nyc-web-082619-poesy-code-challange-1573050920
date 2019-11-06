import React from 'react';

class LoginForm extends React.Component {

  state={
    username:''
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render(){
    return (
      <div className="login">
        <form className="login-form">
          <input placeholder="Enter a username..." onChange={(event) => this.handleChange(event)} value={this.state.username}  />
          <input type="submit" value="Log In" onClick={event => this.props.getUsername(event, this.state.username)}/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;