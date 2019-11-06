import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  renderPoems = () => {
    return this.props.poems.map(poem => {
      return <Poem action={this.props.action} key={poem.id} {...poem} />;
    });
  };
  render() {
    return <div className="poems-container">{this.renderPoems()}</div>;
  }
}

export default PoemsContainer;
