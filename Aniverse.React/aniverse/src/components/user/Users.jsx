import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllFriends } from '../../redux/actions/friendAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';

const Users = (props) => {
 const navigate = useNavigate();
 const { getFriend, users } = props;
 const username = JSON.parse(localStorage.getItem('loginUser')).username;
 useEffect(() => {
  getFriend(username, 1, 4);
 }, [getFriend, username]);
 if (users.response) {
  if (users.response.status === 403) return navigate('/unautherized');
  if (users.response.status === 404 || users.response.status === 500)
   return <>Get Friends error</>;
 }
 return (
  <div className="users-section">
   <h3 className="section-title">Friends</h3>
   {users.map((user) =>
    username !== user.username ? (
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
   <Link to={'/people/friends'} className="btn btn-loadmore">
    More friend
    <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
   </Link>
  </div>
 );
};
const mapStateToProps = (state) => {
 return {
  users: state.friendReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  getFriend: (username, page, size) => {
   dispatch(getAllFriends(username, page, size));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
