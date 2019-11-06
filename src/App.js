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
    poems: [],
    likedPoems: []
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

  findPoemById = id => {
    return this.state.poems.find(poem => poem.id === id);
  };

  likePoemById = id => {
    const poem = this.findPoemById(id);
    this.setState({ likedPoems: [...this.state.likedPoems, poem] });
  };

  unlikePoemById = id => {
    const index = this.state.likedPoems.findIndex(poem => poem.id === id);
    const likedPoemsClone = [...this.state.likedPoems];
    likedPoemsClone.splice(index, 1);
    this.setState({ likedPoems: likedPoemsClone });
  };

  addPoem = poem => {
    const mainBody = { ...poem };
    const content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(mainBody)
    };
    fetch(POEMS_PATH, content)
      .then(res => res.json())
      .then(poem => {
        this.setState(prevState => ({ poems: [...prevState.poems, poem] }));
      });
  };

  getUnlikedPoems = () => {
    return [...this.state.poems].filter(poem => {
      return !this.state.likedPoems.includes(poem);
    });
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
        <PoemsContainer
          action={this.likePoemById}
          poems={this.getUnlikedPoems()}
        />
        <PoemsContainer
          action={this.unlikePoemById}
          poems={this.state.likedPoems}
        />
      </div>
    );
  }
}

export default App;
