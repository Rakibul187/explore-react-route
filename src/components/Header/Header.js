import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/friends'>Friends</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
            <h3>Common headers</h3>
        </div>
    );
};

export default Header;