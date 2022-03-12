import React, { useState, useEffect } from 'react';
import UserRequest from '../user/UserRequest';
import { connect } from 'react-redux';
import { getFriendRequest } from '../../redux/actions/userActions';
import Sponsored from '../Sponsored/Sponsored';

function SidebarRight(props) {
 const { getFriendRequest } = props;

 useEffect(() => {
  getFriendRequest();
 }, [getFriendRequest]);
 return (
  <>
   <UserRequest request={props.usersRequest} />
   <Sponsored />
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
export default connect(mapStateToProps, mapDispatchToProps)(SidebarRight);
