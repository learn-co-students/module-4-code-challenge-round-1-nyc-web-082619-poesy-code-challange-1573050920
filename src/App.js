import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  state = {
    loggedInUser: null,
    poems: null
  }

  componentDidMount(){
    fetch("http://localhost:3000/poems")
    .then(resp => resp.json())
    .then(poemsArr => this.setState({poems: poemsArr}))
  }

  renderUser = () => {
    if (this.state.loggedInUser)
      {return (<UserHeader loggedInUser={this.state.loggedInUser} logOutUser={this.logOutUser}/>)}
    else
      {return (<LoginForm setLoggedInUser={this.setLoggedInUser} />)}
  }

  setLoggedInUser = user => {
    this.setState({loggedInUser: user})
  }

  logOutUser = () => {
    this.setState({loggedInUser: null})
  }

  postPoem = (title, text) => {
    fetch("http://localhost:3000/poems",
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"},
        body: JSON.stringify({"title": title, "text": text, "author": this.state.loggedInUser}) 
      }
    )
  }

  render(){
    console.log("RENDERING APP", this.state)
    return (
      <div className="app">
        <div className="sidebar">
          {this.renderUser()}
          <NewPoemForm postPoem={this.postPoem}/>
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    ); 
  }
}

export default App;

