import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import {
 confirmFriend,
 declinedFriend,
} from '../../../../redux/actions/friendAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FriendRequestButton = (props) => {
 const navigate = useNavigate();
 const [isConfirm, setIsConfirm] = useState(false);
 const { confirmRequest, declinedRequest, userId, request } = props;
 useEffect(() => {
  if (request.response) {
   if (request.response.status) {
    toast.error('Wow so easy !');
   }
  }
 }, [navigate, isConfirm]);
 return (
  <div className="buttons">
   <form
    onSubmit={(e) => {
     e.preventDefault();
     setIsConfirm(!isConfirm);
     confirmRequest(userId);
    }}>
    <button type="submit" className="btn btn-primary">
     <FontAwesomeIcon icon="fa-solid fa-user-check" />
     Confirm
    </button>
   </form>
   <form
    onSubmit={(e) => {
     e.preventDefault();
     setIsConfirm(!isConfirm);
     declinedRequest(userId);
    }}>
    <button type="submit" className="btn btn-light">
     <FontAwesomeIcon icon="fa-solid fa-user-xmark" />
     Remove
    </button>
   </form>
   <ToastContainer
    position="top-center"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
   />
  </div>
 );
};

const mapStateToProps = (state) => {
 return {
  request: state.friendRequestReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  confirmRequest: (id) => {
   dispatch(confirmFriend(id));
  },
  declinedRequest: (id) => {
   dispatch(declinedFriend(id));
  },
 };
};

export default connect(
 mapStateToProps,
 mapDispatchToProps,
)(FriendRequestButton);
