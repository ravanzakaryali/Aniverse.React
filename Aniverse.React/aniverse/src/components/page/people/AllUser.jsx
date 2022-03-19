import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../../redux/actions/userActions';
import UserItem from './UserItem';

function AllUser(props) {
 const { getUsers } = props;

 useEffect(() => {
  getUsers();
 }, []);
 return (
  <>
   <UserItem users={props.users} />
  </>
 );
}

function mapStateToProps(state) {
 return {
  users: state.usersAllReducer,
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  getUsers: () => {
   dispatch(getUsers());
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllUser);
