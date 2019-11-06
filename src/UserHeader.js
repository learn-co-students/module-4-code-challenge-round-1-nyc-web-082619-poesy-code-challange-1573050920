import React from 'react';

const UserHeader = (props) => {
  
  const { user, logout } = props
  return (
    <div className="user-header">
      <h3>Welcome, { user }!</h3>
      <button onClick={ logout }>Logout</button>
    </div>
  ); 
}

export default UserHeader;
