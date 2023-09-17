import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    const handleDelete = ( _id) =>{
        console.log(_id);
        fetch(`http://localhost:7000/users/${_id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <>
          <h1>User Total Added: {users.length}</h1> 
          <div>
            {
                users.map(user => <p>{user.name} {user.email} {user._id} <button onClick={()=> handleDelete(user._id)}>X</button></p>)
            }
          </div> 
          
        </>
    );
};

export default Users;