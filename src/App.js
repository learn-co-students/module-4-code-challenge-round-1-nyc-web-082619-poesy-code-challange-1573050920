import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  state={
    poems: [],
    login: "",
    newPoem: {}
  }

  componentDidMount = () => {
      fetch('http://localhost:3000/poems')
          .then(res => res.json())
          .then(poems => this.setState({poems: poems}))
  }

  getUsername = (event, username) => {
     event.preventDefault()

    this.setState({
        login: username
    })
  }

  logout = () => {
    this.setState({
      login: ""
    })
  }

  submitNewPoem = (event, newPoemTitle, newPoemContent) => {
      if (this.state.login !== ""){
          event.preventDefault()

            this.setState({
          poems: [...this.state.poems, {author: this.state.login ,title: newPoemTitle, content: newPoemContent}]
      })
  }
  }


  render(){

    return (
      <div className="app">
       
        <div className="sidebar">
          { this.state.login === "" ? <LoginForm getUsername={this.getUsername} /> 
            :
          <UserHeader login={this.state.login} logout={this.logout} /> }

          <NewPoemForm submitNewPoem={this.submitNewPoem}/>
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    ); 
  }
}

export default App;
