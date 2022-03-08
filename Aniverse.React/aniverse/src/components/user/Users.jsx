import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Users(props) {
 return (
  <div className="users-section">
   <h3 className="section-title">Friends</h3>
   {props.users.map((user) =>
    props.userAuth.username !== user.username ? (
     <div className="sidebar-user col-12" key={user.id}>
      <Link to={`user/${user.username}`} className="account-profile col-12">
       <img
        className="users-profile"
        src={
         user.profilPicture == null
          ? `../../img/user.png`
          : `${user.profilPicture}`
        }
        alt=""
       />
       <p className="users-name">
        {user.firstname} {user.lastname}
       </p>
      </Link>
     </div>
    ) : (
     ''
    ),
   )}
   <button className="btn btn-loadmore">More friend</button>
  </div>
 );
}
function mapStateToProps(state) {
 return {
  userAuth: state.userNavbarReducer,
 };
}

export default connect(mapStateToProps)(Users);
