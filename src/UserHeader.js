import React from "react";

class UserHeader extends React.Component {
  handleClick = () => {
    this.props.logout();
  };
  render() {
    return (
      <div className="user-header">
        <h3>Welcome, {this.props.user}!</h3>
        <button onClick={this.handleClick}>Logout</button>
      </div>
    );
  }
}

export default UserHeader;
