import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <div className="or-divider">
          <hr />
          <span>OR</span>
          <hr />
        </div>
        <button className="btn btn-outline-secondary btn-google">
          <i className="fab fa-google"></i> Login with Google
        </button>
        <button className="btn btn-outline-secondary btn-github">
          <i className="fab fa-github"></i> Login with GitHub
        </button>
        <div className="register-link">
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
