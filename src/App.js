import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {
  
  state = {
    poems: [],
    username: "",
    userLoggedIn: "",
    newPoem: {
      title: "",
      content: ""
    }
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/poems')
    .then(res => res.json())
    .then(data => {
      this.setState({
        poems: data
      })
    })
  }

  handleChange = (event) => {
    event.persist()
    this.setState({
      username: event.target.value
    })
  }

  // this was working earlier, can't debug why it's not working right now
  submitLogin = (e) => {
    e.preventDefault()
    debugger
    this.setState({
      userLoggedIn: this.state.username
    })
  }

  logout = () => {
    this.setState({
      username: "",
      userLoggedIn: ""
    })
  }

  handleChange = (event) => {
    switch(event.target.name){
      case "title":
          this.setState({newPoem: {...this.state.newPoem, title: event.target.value}})
          break;
      case "content":
          this.setState({newPoem: {...this.state.newPoem, content: event.target.value}})
          break;
      }
  }

  submitNew = (e) => {
    e.preventDefault()
    // console.log(this.createNewPoem())
    let newPoem = this.createNewPoem()
    // console.log(newPoem)
    this.setState({
      poems: [...this.state.poems, newPoem]
    })
  }

  createNewPoem = () => {
    const poem = {
      title: this.state.newPoem.title,
      content: this.state.newPoem.content,
      author: this.state.userLoggedIn
    }
    return poem
  }

  render(){
    
    return (
      <div className="app">
        <div className="sidebar">
          { 
            this.state.userLoggedIn ? 
              <UserHeader user={this.state.userLoggedIn} logout={this.logout}/>
            :
              <LoginForm handleChange={this.handleChange} submitLogin={this.submitLogin} />
          }
          <NewPoemForm handleChange={this.handleChange} newPoem={this.state.newPoem} submitNew={this.submitNew}/>
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    ); 
  }
}

export default App;
