import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWindowSize } from '@react-hook/window-size';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getAllFriends } from '../../../redux/actions/friendAction';
import { getLoginUser, getUser } from '../../../redux/actions/userActions';
import UserCoverPicture from './UserCoverPicture';
import UserProfilePicture from './UserProfilePicture';

function User(props) {
 const { loginUserRequest, userMethod, userFriendMethod } = props;
 const [width] = useWindowSize();
 const location = useLocation();
 const [comRender, setComRender] = useState(1);
 const params = useParams().username;
 const { firstname, lastname, username, id, profilPicture, coverPicture } =
   props.user,
  friends = props.userFriend;

 useEffect(() => {
  userMethod(params);
  userFriendMethod(params, 1, 100);
  loginUserRequest();
  if (props.user.firstname) {
   document.title = `${firstname} ${lastname} | Aniverse`;
  }
 }, [
  firstname,
  lastname,
  loginUserRequest,
  params,
  props.user.firstname,
  userFriendMethod,
  userMethod,
 ]);

 return (
  <>
   <div
    className={`${
     width > 992 ? ' container' : ' container-lg'
    } user-profile-parent`}>
    <div className="cover-picture">
     <UserCoverPicture
      userId={id}
      setComRender={setComRender}
      comRender={comRender}
      coverPicture={coverPicture}
     />
    </div>
    <div className={`${width > 992 ? 'container-min' : ''}`}>
     <div className="profile-row row">
      <div className="profile-picture-row col-8 d-flex">
       <UserProfilePicture
        setComRender={setComRender}
        comRender={comRender}
        profilPicture={profilPicture}
       />
       <div className="profil-content col-6">
        <h2 className="profile-name-surname">
         {firstname} {lastname}
        </h2>
        <span className="friend-count">
         {friends.length ? (
          <Link to={'friends'}>{friends.length} friends</Link>
         ) : (
          'Find new friends'
         )}
        </span>
        <div className="friends-pp d-none d-sm-flex">
         {friends.map((friend, index) => (
          <div key={index} className="ml-10">
           <Link to={`/user/${friend.username}`}>
            <img
             alt={`${friend.firstname + friend.lastname + 's profile picture'}`}
             className="friend-img"
             src={
              friend.profilPicture == null
               ? `../../img/user.png`
               : `${friend.profilPicture}`
             }></img>
           </Link>
          </div>
         ))}
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
         {/* <li>
          <Link
           to={`/user/${username}/pages`}
           className={
            location.pathname === `/user/${username}/pages` ? 'active' : ''
           }>
           Pages
          </Link>
         </li> */}
        </ul>
       </div>
       <div className="col-3">
        <ul className="profile-menu justify-content-end">
         <li className="setting">
          {props.userAuth.id === props.user.id ? (
           <>
            <Link
             to={`/user/${username}/setting`}
             className={
              location.pathname === `/user/${username}/setting` ? 'active' : ''
             }>
             <FontAwesomeIcon icon="fa-solid fa-gear" />
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
