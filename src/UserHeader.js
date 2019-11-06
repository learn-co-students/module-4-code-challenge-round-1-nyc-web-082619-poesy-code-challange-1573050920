import React from 'react';

class UserHeader extends React.Component {
  handleOnClick=()=>{
    this.props.clearUsername()
  }
  render(){
    return (
      <div className="user-header">
        <h3>Welcome, {this.props.username}!</h3>
        <button onClick={this.handleOnClick}>Logout</button>
      </div>
    ); 
  }
}

export default UserHeader;
