import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  state = {
    poems: [],
    login: false,
    username: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/poems')
    .then(response => response.json())
    .then(poems => {
      this.setState({
        poems: [...poems]
      })
    })
  }

  loginChange = (username) => {
    this.setState({
      login: !this.state.login,
      username: username
    })
  }

  logout = (event) => {
    this.setState({
      login: !this.login,
      username: ""
    })
  }

  postNewPoem = (title, content) => {
    return fetch('http://localhost:3000/poems', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        content: content,
        author: this.state.username
      })
    })
    .then(response => response.json())
    .then(newPoem => {
      this.setState({
        poems: [...this.state.poems, newPoem]
      })
    })
    
  }

  render(){
    return (
      <div className="app">
        <div className="sidebar">
          <LoginForm 
            loginChange={this.loginChange}
          />
          <UserHeader 
            username={this.state.username}
            logout={this.logout}
          />
          <NewPoemForm 
            postNewPoem={this.postNewPoem}
          />
        </div>
        <PoemsContainer 
          poems={this.state.poems}
        />
      </div>
    ); 
  }
}

export default App;
