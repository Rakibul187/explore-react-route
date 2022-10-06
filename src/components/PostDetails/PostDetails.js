import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    // console.log(post)
    const { id, title, body, userId } = post
    const navigate = useNavigate()
    const navigateHandle = () => {
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h1>Post Details is Here!!!!</h1>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={navigateHandle}>Get the author</button>
        </div>
    );
};

export default PostDetails;