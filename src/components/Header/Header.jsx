import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='nav'>
            <img className='header' src="https://images.unsplash.com/photo-1466784828399-9a9921e8bdfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMHdlYnNpdGUlMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/user">Profile</Link>
      </nav>
    );
};

export default Header;