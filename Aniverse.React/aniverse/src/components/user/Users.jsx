import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Users(props) {
    return (
        <div className='users-section'>
            <h3 className='section-title'>
                Friends
            </h3>
            {props.users.map(user => (
                <div className='sidebar-user col-12' key={user.friend.id}>
                    <Link to={`user/${user.friend.username}`} className='account-profile col-12'>
                        <img className='users-profile' src={
                            user.friend.profilPicture == null ? `../../img/user.png` : `${user.friend.profilPicture}`
                        } alt="" />
                        <p className='users-name'>
                            {user.friend.firstname} {user.friend.lastname}
                        </p>
                    </Link>
                </div>
            ))}
            <button className='btn btn-loadmore'>
                More friend
            </button>
        </div>
    )
}

export default Users;
