import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='nav'>
            <img className='header'
            src="https://images.unsplash.com/photo-1466784828399-9a9921e8bdfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMHdlYnNpdGUlMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
            <NavLink exact to="/blog" activeClassName="active">Blog</NavLink>
            <NavLink exact to="/user" activeClassName="active">User</NavLink>
            <NavLink exact to="/login" activeClassName="active"><button className='log'>Login</button></NavLink>
      </nav>
    );
};

export default Header;