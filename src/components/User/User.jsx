import React from 'react';
import './User.css'

const User = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
    },
  };

  return (
    <div className="user-container">
      <div className="user-info">
        <h1>User Profile</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
        <h2>Address:</h2>
        <p>{user.address.street}</p>
        <p>
          {user.address.city}, {user.address.state} {user.address.zip}
        </p>
      </div>
    </div>
  );
};

export default User;
