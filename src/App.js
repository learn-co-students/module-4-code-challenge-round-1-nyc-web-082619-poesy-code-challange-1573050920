import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {
  state = {
    allPoems: [],
    userName: "",
    loggedIn: false
  }


  componentDidMount(){
    fetch('http://localhost:3000/poems')
    .then(response => response.json())
    .then(allPoems => this.setState({allPoems: allPoems}))
  }

  login = (username) => {
    this.setState({userName: username, loggedIn: true})
  }

  logout = () => {
    this.setState({userName: "", loggedIn: false})
  }

  addPoem = (newPoem) => {
    if (this.state.loggedIn){
    this.setState({allPoems: [...this.state.allPoems, newPoem]})
    } else { alert("You must be logged in to add a poem")}
  }

  render(){
    return (
      <div className="app">
        <div className="sidebar">
          {/* Conditional rendering based on state - if the user is logged in show the username - if not - show sign in form  */}
          {this.state.loggedIn ? <UserHeader username={this.state.userName} logout={this.logout}/> : <LoginForm login={this.login} />}
    
          <NewPoemForm addPoem={this.addPoem} username={this.state.userName}/>
        </div>
        <PoemsContainer allPoems={this.state.allPoems}/>
      </div>
    ); 
  }
}

export default App;
