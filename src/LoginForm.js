import React from 'react';

const LoginForm = (props) => {
  const { changeUser, changeUserInput, userInput} = props

  const handleSubmit = (event) => {
    event.preventDefault()
    changeUser(event)
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login-form">
        <input name="user" value={userInput} onChange={changeUserInput} placeholder="Enter a username..." />
        <input type="submit" value="Log In"/>
      </form>
    </div>
  ); 
}

export default LoginForm;