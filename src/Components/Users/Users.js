import React, { useEffect, useState } from 'react';
import User from './User/User';
import './Users.css'

const Users = () => {
const [users, setUsers] = useState([])
     useEffect(() =>{
         fetch('https://api.github.com/users')
         .then(res => res.json())
         .then(data => setUsers(data))
     }, [])
    return (
        <div className="users-header">
             <h1 >Here is The All Github User List: {users.length}</h1>
             <div className="users-container">
                 {
                     users.map(user => <User user={user}></User>)
                 }
             </div>
        </div>
    );
};

export default Users;