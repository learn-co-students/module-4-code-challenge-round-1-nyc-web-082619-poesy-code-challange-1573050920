import React from "react";
import "./App.css";
import LoginForm from "./LoginForm";
import UserHeader from "./UserHeader";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const URL = "http://localhost:3000";
const POEMS_PATH = URL + "/poems";

class App extends React.Component {
  state = {
    user: null,
    poems: []
  };

  componentDidMount() {
    fetch(POEMS_PATH)
      .then(e => e.json())
      .then(e => this.setState({ poems: e }));
  }

  login = username => {
    this.setState({ user: username });
  };

  logout = () => this.login(null);

  addPoem = poem => {
    this.setState(prevState => ({ poems: [...prevState.poems, poem] }));
  };

  renderSessionUser = () => {
    if (this.state.user == null) {
      return <LoginForm login={this.login} />;
    }
    return (
      <>
        <UserHeader logout={this.logout} user={this.state.user} />
        <NewPoemForm user={this.state.user} addPoem={this.addPoem} />
      </>
    );
  };

  render() {
    return (
      <div className="app">
        <div className="sidebar">{this.renderSessionUser()}</div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
