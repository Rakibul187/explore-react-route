import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend)
    const { name, phone } = friend
    return (
        <div>
            <h1>name: {name}</h1>
            <p>Phone: {phone}</p>
            <h3>Everything you need to know about this person!</h3>
        </div>
    );
};

export default FriendDetails;