import React from "react";

class Poem extends React.Component {
  state = {
    read: false
  };

  handleAction = () => {
    this.props.action(this.props.id);
  };

  handleClick = e => {
    if (e.target.className !== "like-button") {
      this.setState(prevState => ({ read: !prevState.read }));
    }
  };

  render() {
    return (
      <div
        onClick={this.handleClick}
        style={this.state.read ? { color: "red" } : { color: "black" }}
      >
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <strong>- By {this.props.author}</strong>
        <div onClick={this.handleAction} className="like-button">
          &#9829;
        </div>
      </div>
    );
  }
}

export default Poem;
