import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !password) {
        setErrorMessage('Please fill out all required fields');
        return;
      }
    
      if (password.length < 6) {
        setErrorMessage('Password must be at least 6 characters long');
        return;
      }
    
      const user = {
        name,
        email,
        password,
        photoUrl
      };
    
      console.log('New user:', user);
    
       // Handle registration form submission here
      // If registration is successful, set success message
      setSuccessMessage('Registration successful!');
      // Clear error message
      setErrorMessage('');
    }

  return (
    <div className="registration">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} required onChange={(event) => setName(event.target.value)} />
         <br></br>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} required onChange={(event) => setEmail(event.target.value)} />
        <br></br>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} minLength="6" required  onChange={(event) => setPassword(event.target.value)} />
        <br></br>
        <label htmlFor="photoUrl">Photo URL:</label>
        <input type="text" id="photoUrl" value={photoUrl} onChange={(event) => setPhotoUrl(event.target.value)} />
         <br></br>
         {errorMessage && <p>{errorMessage}</p>}
         {successMessage && <p className="success">{successMessage}</p>}

        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Log in here</Link></p>
    </div>
  );
};

export default Registration;