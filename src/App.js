import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  state={
    poems: [],
    user: null,
    userInput: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/poems')
    .then(res=>res.json())
    .then(poems=>this.setState({ poems }))
  }

  changeUser = (event) => {
    this.setState({
      user: event.target.user.value
    })
  }

  changeUserInput = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  logout = () => {
    this.setState({
      user: null,
      userInput: ""
    })
  }

  addPoem = (title, content) => {
    if(this.state.user){
    const poem = {title, content, author: this.state.user}
    
    const fetchObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(poem)
    }

    fetch("http://localhost:3000/poems", fetchObj).then(res=>res.json())
    .then(newPoem=>{this.setState(prevProps=>{
      return {poems: [...prevProps.poems, newPoem]}
      })
    })}else{
      alert("Please Log in Before Submitting a new Poem")
    }
  }

  readPoem = (id) => {
    this.setState(prevProps=>{
      return {poems: prevProps.poems.map(poem=>{
        if(poem.id === id) return {...poem, read: !poem.read}
        else return poem
      })}
    })
  }

  likePoem = (id) => {
    this.setState(prevProps=>{
      return {poems: prevProps.poems.map(poem=>{
        if(poem.id === id) return {...poem, liked: !poem.liked}
        else return poem
      })}
    })
  }

  render(){
    console.log(this.state.poems)
    const { user, userInput, poems } = this.state
    return (
      <div className="app">
        <div className="sidebar">
          {this.state.user ? 
          <UserHeader user={user} logout={this.logout}/>
          :
          <LoginForm 
            changeUser={this.changeUser}
            changeUserInput={this.changeUserInput} 
            userInput={userInput}
          />
          }
          <NewPoemForm addPoem={this.addPoem}/>
        </div>
        <PoemsContainer poems={poems} readPoem={this.readPoem} like={this.likePoem}/>
        <PoemsContainer poems={poems.filter(poem=>poem.liked)} readPoem={this.readPoem}/>
      </div>
    ); 
  }
}

export default App;
