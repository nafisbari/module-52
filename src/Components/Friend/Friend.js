import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Friends from '../Friends/Friends';
import './Friend.css';

const Friend = (props) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/friend/${id}`)
    }
    const { id, name, email, address } = props.user;
    const friendStyle = {
        color: "red",
        border: '3px solid goldenrod',
        paddig: '10px',
        borderRadius: '5px'
    }
    const url = `/friend/${id}`;
    return (
        <div className="friend-style">
            <h2>i am {name}</h2>
            <h4>email {email}</h4>
            <p>city {address.city}</p>
            <Link to={`/friend/${id}`}>Visit Me</Link>
            <br />
            <Link to={url}>
                <button> Visit Me</button>
            </Link>
            <br />
            <button onClick={handleClick}>Are bhai eta holo ekta button</button>
        </div>
    );
};

export default Friend;
