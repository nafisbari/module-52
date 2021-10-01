import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h2>friends</h2>
            <div className="friends-container">
                {
                    users.map(user => <Friend
                        key={user.id}
                        user={user}></Friend>)


                }
            </div>
        </div>
    );
};

export default Friends;