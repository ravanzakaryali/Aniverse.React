import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
 confirmFriend,
 getFriendRequest,
} from '../../redux/actions/friendAction';
import ProfilPictureStyle from './../user/ProfilePictureStyle';

function UserRequest(props) {
 const { confirm } = props;
 const { friendRequest } = props;
 const [confirmState, setConfirmState] = useState({});
 useEffect(() => {
  friendRequest(1, 100);
 }, [friendRequest]);
 return (
  <>
   {props.request.data.length ? (
    <div className="users-section">
     <h3 className="section-title">Friends Request</h3>
     {props.request.data.map((user) => (
      <div className="sidebar-user col-12" key={user.id}>
       <Link to={`user/${user.username}`} className="account-profile">
        <ProfilPictureStyle
         className="users-profile"
         profilPicture={user.profilPicture}
        />
        <p className="users-name">
         {user.firstname} {user.lastname}
        </p>
       </Link>
       <div className="content">
        <form
         className="col-12 request-btns"
         onSubmit={(e) => {
          e.preventDefault();
          confirm(confirmState.friendId);
          e.currentTarget.children[0].disabled = true;
         }}>
         <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
           const isConfirm = true,
            friendId = user.id;
           setConfirmState({
            ...confirmState,
            ...{ isConfirm, friendId },
           });
           e.currentTarget.nextElementSibling.remove();
           e.currentTarget.style.width = '100%';
           e.currentTarget.innerText = 'You friend';
          }}>
          Confirm
         </button>
         <button
          type="submit"
          className="btn btn-light"
          onClick={(e) => {
           const isConfirm = false,
            friendId = user.friend.id;
           setConfirmState({
            ...confirmState,
            ...{ isConfirm, friendId },
           });
           e.currentTarget.previousElementSibling.remove();
           e.currentTarget.style.width = '100%';
           e.currentTarget.innerText = 'Request deleted';
          }}>
          Remove
         </button>
        </form>
       </div>
      </div>
     ))}
     <Link to="/people/request" className="btn btn-loadmore">
      More friend request <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
     </Link>
    </div>
   ) : (
    ''
   )}
  </>
 );
}

const mapStateToProps = (state) => {
 return {
  request: state.getFriendRequestReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  confirm: (friendId) => {
   dispatch(confirmFriend(friendId));
  },
  friendRequest: (page, size) => {
   dispatch(getFriendRequest(page, size));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRequest);
