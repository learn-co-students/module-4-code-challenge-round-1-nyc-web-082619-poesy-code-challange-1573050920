import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  state = {
    poems: [],
    userName: "",
    headerText: false,
    newPoem: {
      title: "",
      content: "",
      author: ""
    }
  }

  API = "http://localhost:3000/poems"

  componentDidMount = () => {
    fetch(this.API)
      .then(resp => resp.json())
      .then(this.renderPoems)
  }
  
  renderPoems = (poems) => {
    this.setState({poems: poems})
  }

  handleUsername = (e) => {
    this.setState({userName: e.target.value})
  }

  handleUserSubmit = (event) => {
    event.preventDefault();
    this.setState({headerText: true})
  }

  handleHeaderDisplay = () => {
    if(this.state.headerText)
      return (
        <>
          <UserHeader  handleLogOut={this.handleLogOut} headerText={this.state.userName}/>
          <NewPoemForm getNewPoem={this.getNewPoem}/>
        </>
      )
    else 
      return <LoginForm handleUserSubmit={this.handleUserSubmit} handleUsername = {this.handleUsername} userName = {this.state.userName}/>
  }

  getNewPoem = (newPoem) => {
    // console.log("New Poem: ", newPoem)
    const createNewPoem = {...newPoem,author: this.state.userName}
    this.setState({poems: [...this.state.poems, createNewPoem]})
  }

  // addNewPoemToList = (newPoem) => {
  //   console.log("Poem to be added: ", newPoem)
  //   this.setState({poems: [...this.state.poems, newPoem]})
  // }

  handleLogOut = () => {
    this.setState({userName: "", headerText: false})
  }

  render(){
    console.log("State: ", this.state)
    return (
      <div className="app">
        <div className="sidebar">
          {this.handleHeaderDisplay()}
          
        </div>
        <PoemsContainer poems = {this.state.poems}/>
      </div>
    ); 
  }
}

export default App;
