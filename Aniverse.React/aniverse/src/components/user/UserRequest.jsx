import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { postFriendConfirm } from '../../redux/actions/userActions';

function UserRequest(props) {
 const { confirm } = props;
 const [confirmState, setConfirmState] = useState({});
 return (
  <div className="users-section">
   <h3 className="section-title">Friends Request</h3>
   {props.request.map((user) => (
    <div className="sidebar-user col-12" key={user.id}>
     <Link to={`user/${user.username}`} className="account-profile">
      <img
       className="users-profile"
       src={
        user.profilPicture == null
         ? `../../img/user.png`
         : `${user.friend.profilPicture}`
       }
       alt=""
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
        console.log(confirmState);
        confirm(confirmState);
        e.currentTarget.children[0].disabled = true;
       }}>
       <button
        type="submit"
        className="btn btn-primary"
        onClick={(e) => {
         const isConfirm = true,
          friendId = user.friend.id;
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
   <button className="btn btn-loadmore">More friend request</button>
  </div>
 );
}

const mapDispatchToProps = (dispatch) => {
 return {
  confirm: (friendId) => {
   dispatch(postFriendConfirm(friendId));
  },
 };
};

export default connect(null, mapDispatchToProps)(UserRequest);
