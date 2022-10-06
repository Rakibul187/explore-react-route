import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'
const Friend = ({ friend }) => {
    // console.log(friend)
    const { name, email, username, id } = friend
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <small>UserName: <Link to={`/friend/${id}`}>{username}</Link></small>
        </div>
    );
};

export default Friend;