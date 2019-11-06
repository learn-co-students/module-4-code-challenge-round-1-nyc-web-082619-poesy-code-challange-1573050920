import React from 'react';

class LoginForm extends React.Component {
  state = {
    userName: ""
  }
  
  changeHandler = (event) => {
    console.log(this.state)
    this.setState({userName: event.target.value})
  }


  submitHandler = (event) => {
    event.preventDefault()
    this.props.login(this.state.userName)
    

  }

  render(){

    console.log(this.state)
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.submitHandler}>
          <input placeholder="Enter a username..." value={this.state.value} onChange={this.changeHandler}/>
          <input type="submit" value="Log In"/>
        </form>
      </div>
    ); 
  }



}

export default LoginForm;