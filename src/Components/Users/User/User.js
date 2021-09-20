import React from 'react';
import './User.css'

const User = (props) => {
const {login, avatar_url} = props.user;

    return (
        <div className="user">
         <h2>User Name : {login}</h2>
         <img src={avatar_url} alt="" />
         <h4>GitHub</h4>
        </div>
    );
};

export default User;