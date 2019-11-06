import React from 'react';

class UserHeader extends React.Component {

  handleLogOut = () => {
    this.props.logOutUser()
  }

  render(){
    return (
      <div className="user-header">
        <h3>Welcome, {this.props.loggedInUser}!</h3>
        <button onClick={this.handleLogOut}>Logout</button>
      </div>
    ); 
  }
}

export default UserHeader;

