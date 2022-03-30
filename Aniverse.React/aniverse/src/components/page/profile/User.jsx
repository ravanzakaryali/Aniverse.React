import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWindowSize } from '@react-hook/window-size';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getAllFriends } from '../../../redux/actions/friendAction';
import { getLoginUser, getUser } from '../../../redux/actions/userActions';
import Loading from '../../loading/Loading';
import ProfilePictureStyle from '../../user/ProfilePictureStyle';
import UserCoverPicture from './UserCoverPicture';
import UserProfilePicture from './UserProfilePicture';
import { AiFillSetting } from 'react-icons/ai';

function User(props) {
 const { loginUserRequest, userMethod, userFriendMethod } = props;
 const [width] = useWindowSize();
 const location = useLocation();
 const usernameParams = useParams().username;
 const {
   firstname,
   lastname,
   friendCount,
   username,
   id,
   profilPicture,
   coverPicture,
  } = props.user.data,
  friends = props.userFriend;

 useEffect(() => {
  if (username) document.title = `${firstname} ${lastname} | Aniverse`;
  userMethod(usernameParams);
  userFriendMethod(usernameParams, 1, 9);
  loginUserRequest();
  if (props.user.firstname) {
   document.title = `${firstname} ${lastname} | Aniverse`;
  }
 }, [usernameParams]);

 if (props.user.loading)
  return (
   <div className="loading_user">
    <Loading />
   </div>
  );

 return (
  <>
   <div
    className={`${
     width > 992 ? ' container' : ' container-lg'
    } user-profile-parent`}>
    <div className="cover-picture">
     <UserCoverPicture userId={id} coverPicture={coverPicture} />
    </div>
    <div className={`${width > 992 ? 'container-min' : ''}`}>
     <div className="profile-row row">
      <div className="profile-picture-row col-8 d-flex">
       <UserProfilePicture profilPicture={profilPicture} />
       <div className="profil-content col-6">
        <h2 className="profile-name-surname">
         {firstname} {lastname}
        </h2>
        <span className="friend-count">
         {friends.data.length ? (
          <Link to={'friends'}>{friendCount} friends</Link>
         ) : (
          'Find new friends'
         )}
        </span>
        <div className="friends-pp d-none d-sm-flex">
         {friends.data.map((friend, index) =>
          username !== friend.username && index <= 9 ? (
           <div key={index} className="ml-10">
            <Link to={`/user/${friend.username}`}>
             <ProfilePictureStyle
              className={'friend-img'}
              alt={`${
               friend.firstname + friend.lastname + 's profile picture'
              }`}
              profilPicture={friend.profilPicture}
             />
            </Link>
           </div>
          ) : (
           ''
          ),
         )}
        </div>
       </div>
      </div>
      <div className="menu-row">
       <div className="col-9">
        <ul className="profile-menu">
         <li>
          <Link
           to={`/user/${username}`}
           className={
            location.pathname === `/user/${username}` ? 'active' : ''
           }>
           Posts
          </Link>
         </li>
         <li>
          <Link
           to={`/user/${username}/about`}
           className={
            location.pathname === `/user/${username}/about` ? 'active' : ''
           }>
           About
          </Link>
         </li>
         <li>
          <Link
           to={`/user/${username}/friends`}
           className={
            location.pathname === `/user/${username}/friends` ? 'active' : ''
           }>
           Friends
          </Link>
         </li>
         <li>
          <Link
           to={`/user/${username}/photos`}
           className={
            location.pathname === `/user/${username}/photos` ? 'active' : ''
           }>
           Photos
          </Link>
         </li>
         <li>
          <Link
           to={`/user/${username}/pages`}
           className={
            location.pathname === `/user/${username}/pages` ? 'active' : ''
           }>
           Pages
          </Link>
         </li>
        </ul>
       </div>
       <div className="col-3">
        <ul className="profile-menu justify-content-end">
         <li className="setting">
          {props.userAuth.id === props.user.data.id ? (
           <>
            <Link
             to={`/user/${username}/setting/archive`}
             className={
              location.pathname.includes(`/user/${username}/setting`)
               ? 'active'
               : ''
             }>
             <AiFillSetting className="icon" />
            </Link>
           </>
          ) : (
           <></>
          )}
         </li>
        </ul>
       </div>
      </div>
     </div>
     <div className="row sidebar-row">
      <Outlet />
     </div>
    </div>
   </div>
  </>
 );
}

const mapStateToProps = (state) => {
 return {
  user: state.userReducer,
  userFriend: state.friendReducer,
  userAuth: state.userLoginReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  userMethod: (username) => {
   dispatch(getUser(username));
  },
  userFriendMethod: (username, page, size) => {
   dispatch(getAllFriends(username, page, size));
  },
  loginUserRequest: () => {
   dispatch(getLoginUser());
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
