import React from "react";

class LoginForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.login(event.target.username.value);
  };
  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} className="login-form">
          <input name="username" placeholder="Enter a username..." />
          <input type="submit" value="Log In" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
