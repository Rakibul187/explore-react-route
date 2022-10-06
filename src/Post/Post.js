import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({ post }) => {
    const navigate = useNavigate()
    const { id, title, body } = post
    const navigateHandler = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h3>Title: {title}</h3>
            <p>Status: {body}</p>
            <Link to={`/post/${id}`}>visit: {id}</Link>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={navigateHandler}>Show by HAndler</button>
        </div>
    );
};

export default Post;