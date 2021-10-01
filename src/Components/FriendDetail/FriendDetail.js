import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const history = useHistory()
    const { friendId } = useParams();
    const [friend, setFriend] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    const handleClick = () => {
        history.push('/friends')
    }


    return (
        <div>
            <h1> {friendId}</h1>

            <h2>{friend.email}</h2>
            <h2>{friend.phone}</h2>
            <h2>{friend.website}</h2>
            <h2>{friend.company?.name}</h2>
            <button onClick={handleClick}> Back Koro </button>
        </div>
    );
};

export default FriendDetail;