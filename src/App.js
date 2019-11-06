import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'
// import { throwStatement } from '@babel/types';



class App extends React.Component {
  state = ({
    loggedIn: false,
    username: "",
    submittedPoems: []
  })

  clearUsername = ()=>{
    this.setState({
      username: ""
    })
  }
  

  getUsername = (name)=>{
    this.setState({
      username: name
    })
  }

  addPoems = (poem)=>{
    this.setState(prevState=>({
      submittedPoems: [...prevState.submittedPoems, poem]
    }))
  }

  renderHeaderOrLogin = ()=>{
  return this.state.username === "" ? <LoginForm getUsername={this.getUsername}/>
    :
    <><UserHeader username={this.state.username} clearUsername={this.clearUsername}/> <div/> <NewPoemForm username={this.state.username} addPoems = {this.addPoems}/></>
  }

  render(){
    return (
      <div className="app">
        <div className="sidebar">
          {this.renderHeaderOrLogin()}
        </div>
        <PoemsContainer submittedPoems = {this.state.submittedPoems}/>
      </div>
    ); 
  }
}

export default App;
