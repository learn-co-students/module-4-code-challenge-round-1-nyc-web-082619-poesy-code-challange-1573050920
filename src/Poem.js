import React from "react";

class Poem extends React.Component {
  state = {
    read: false
  };

  handleClick = () => {
    this.setState(prevState => ({ read: !prevState.read }));
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
      </div>
    );
  }
}

export default Poem;
