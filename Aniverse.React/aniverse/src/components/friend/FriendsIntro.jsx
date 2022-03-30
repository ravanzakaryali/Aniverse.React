import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProfilePictureStyle from '../user/ProfilePictureStyle';
import { getAllFriends } from '../../redux/actions/friendAction';

function FriendsIntro(props) {
 const { userFriend, getFriends } = props;
 useEffect(() => {
  getFriends(props.username, 1, 9);
 }, [getFriends]);
 return (
  <div className="col-12">
   <div className="friends-intro">
    <div className="row">
     <div className="friends-title col-6">Friends</div>

     <div className="col-6 all-friends-btn">
      <Link to={`/user/${props.username}/friends`}>See All Friends</Link>
     </div>
    </div>
    <p className="count"> friends</p>
    <div className="row friends-parent">
     {userFriend.data.map((user, index) =>
      props.username !== user.username ? (
       <div className="col-4" key={index}>
        <Link to={`/user/${user.username}`}>
         <div className="friend-card">
          <ProfilePictureStyle
           className={'friends-profile'}
           profilPicture={user.profilPicture}
          />
          <p className="friend-name">{user.firstname}</p>
         </div>
        </Link>
       </div>
      ) : (
       ''
      ),
     )}
    </div>
   </div>
  </div>
 );
}

const mapStateToProps = (state) => {
 return {
  userFriend: state.friendReducer,
  userAuth: state.userLoginReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  getFriends: (username, page, size) => {
   dispatch(getAllFriends(username, page, size));
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(FriendsIntro);
