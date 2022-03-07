import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getFriendRequest } from '../../../redux/actions/userActions';
import UserItem from './UserItem';

function AllFriendRequest(props) {
 const { getFriendRequest } = props;

 useEffect(() => {
  getFriendRequest();
 }, [getFriendRequest]);
 return (
  <>
   <UserItem users={props.usersRequest} />
  </>
 );
}
function mapStateToProps(state) {
 return {
  usersRequest: state.friendRequestReducer,
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  getFriendRequest: () => {
   dispatch(getFriendRequest());
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllFriendRequest);
