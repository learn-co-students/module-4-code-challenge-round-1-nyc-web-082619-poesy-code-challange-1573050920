import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  state = {
    poems: [],
    loggedIn: false,
    username: ""
  }

  loggedIn = (event) => {
    event.preventDefault()
    if(this.state.loggedIn) {
      this.setState({loggedIn: false})
    } else if(!this.state.loggedIn) {
      this.setState({loggedIn: true})
    }
  }

  logOut= (event) =>{
    event.preventDefault()
    if(this.state.loggedIn) {
      this.setState({loggedIn: false})
    } else if(!this.state.loggedIn) {
      this.setState({loggedIn: true})
    }
    this.setState({username: ""})
  }

  setName = (name) =>{
    this.setState({username: name})
  }


  componentDidMount () {
    fetch('http://localhost:3000/poems')
      .then(response => response.json())
      .then(poems => this.setState({ poems }));
  }

  render(){
    console.log(this.state.username)
    if(!this.state.loggedIn){
      return (
        <div className="app">
          <div className="sidebar">
            <LoginForm loggedIn={this.loggedIn} setName={this.setName}/>
          </div>
        </div>
      )
      } else if(this.state.loggedIn){
        return (
          <div className="app">
            <div className="sidebar">
              <UserHeader username={this.state.username} logOut={this.logOut}/>
              <NewPoemForm username={this.state.username}/>
            </div>
            <PoemsContainer poems={this.state.poems}/>
          </div>
        )
        } 
  }
}

export default App; 
