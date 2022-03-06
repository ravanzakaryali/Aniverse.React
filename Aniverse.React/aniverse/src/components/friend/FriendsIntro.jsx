import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function FriendsIntro(props) {
 const { userFriend } = props;
 return (
  <div className="friends-intro col-12">
   <div className="row">
    <div className="friends-title col-6">Friends</div>

    <div className="col-6 all-friends-btn">
     <Link to={`${props.username}/friends`}>See All Friends</Link>
    </div>
   </div>
   <p className="count">{userFriend.length} friends</p>
   <div className="row friends-parent">
    {userFriend.map((friend) => (
     <div className="col-3" key={friend.id}>
      <a href={`/user/${friend.friend.username}`}>
       <div className="friend-card">
        <img
         alt="Profile"
         className="friends-profile"
         src={
          friend.friend.profilPicture == null
           ? `../../img/user.png`
           : `${friend.profilPicture}`
         }
        />
        <p className="friend-name">{friend.friend.firstname}</p>
       </div>
      </a>
     </div>
    ))}
   </div>
  </div>
 );
}

function mapStateToProps(state) {
 return {
  userFriend: state.friendReducer,
 };
}

export default connect(mapStateToProps)(FriendsIntro);
