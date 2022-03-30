import React, { useEffect, useState } from 'react';
import UserItem from './UserItem';
import { getBlcokUsers } from '../../../redux/actions/userActions';
import { connect } from 'react-redux';

function BlockUsers(props) {
 const { getBlockUsers } = props;
 useEffect(() => {
  getBlockUsers();
  document.title = 'Block users | Aniverse';
 }, [getBlockUsers]);
 return (
  <>
   <UserItem users={props.users.data} />
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  users: state.userReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  getBlockUsers: () => {
   dispatch(getBlcokUsers());
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockUsers);
