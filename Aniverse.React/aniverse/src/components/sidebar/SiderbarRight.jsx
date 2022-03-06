import React, { useState, useEffect } from 'react';
import UserRequest from '../user/UserRequest';
import { connect } from 'react-redux';
import { getFrinedRequest } from '../../redux/actions/userActions';
import Sponsored from '../Sponsored/Sponsored';

import jwtDecode from 'jwt-decode';

function SidebarRight(props) {
 const { getFriendRequest } = props;
 const [userState, setUserState] = useState({});
 const user = jwtDecode(localStorage.getItem('token')).username;

 useEffect(() => {
  setUserState(user);
  getFriendRequest(user);
 }, [userState]);
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
  getFriendRequest: (userState) => {
   dispatch(getFrinedRequest(userState));
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(SidebarRight);
