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
    const poem = {title, content, author: this.state.user}
    this.setState(prevProps=>{
      return {poems: [...prevProps.poems, poem]}
    })
  }

  readPoem = (id) => {
    this.setState(prevProps=>{
      return {poems: prevProps.poems.map(poem=>{
        if(poem.id === id) return {...poem, read: !poem.read}
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
        <PoemsContainer poems={poems} readPoem={this.readPoem}/>
      </div>
    ); 
  }
}

export default App;
