import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { unFriend } from '../../../../redux/actions/friendAction';

export const FriendsButton = (props) => {
 const { unFriendRequest } = props;
 return (
  <>
   <form
    onSubmit={(e) => {
     e.preventDefault();
     unFriendRequest(props.userId);
    }}
    className="buttons">
    <button type="submmit" className="btn btn-light">
     <FontAwesomeIcon className="icon" icon="fa-solid fa-user-minus" />
     Unfriend
    </button>
   </form>
  </>
 );
};

const mapStateToProps = (state) => {
 return {
  request: state.friendRequestReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  unFriendRequest: (id) => {
   dispatch(unFriend(id));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsButton);
