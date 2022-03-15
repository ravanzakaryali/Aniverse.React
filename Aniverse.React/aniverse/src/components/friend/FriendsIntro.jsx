import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function FriendsIntro(props) {
 const { userFriend } = props;
 return (
  <div className="col-12">
   <div className="friends-intro">
    <div className="row">
     <div className="friends-title col-6">Friends</div>

     <div className="col-6 all-friends-btn">
      <Link to={`/user/ ${props.username}/friends`}>See All Friends</Link>
     </div>
    </div>
    <p className="count">{userFriend.length} friends</p>
    <div className="row friends-parent">
     {userFriend.map((user, index) => (
      <div className="col-4" key={index}>
       <Link to={`/user/${user.username}`}>
        <div className="friend-card">
         <img
          alt="Profile"
          className="friends-profile"
          src={
           user.profilPicture == null
            ? `../../img/user.png`
            : `${user.profilPicture}`
          }
         />
         <p className="friend-name">{user.firstname}</p>
        </div>
       </Link>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}

function mapStateToProps(state) {
 return {
  userFriend: state.friendReducer,
  userAuth: state.userNavbarReducer,
 };
}

export default connect(mapStateToProps)(FriendsIntro);
