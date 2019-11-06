import React from 'react';

class UserHeader extends React.Component {
  render(){
    return (
      <div className="user-header">
        <h3>Welcome, {this.props.username}!</h3>

        <form onSubmit={this.props.logOut}>
          <button>Logout</button>
          </form>
      </div>
    ); 
  }
}

export default UserHeader;
