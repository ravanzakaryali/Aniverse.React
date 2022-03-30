import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../../redux/actions/userActions';
import UserItem from './UserItem';
import Loading from './../../loading/Loading';

function AllUser(props) {
 const { getUsers, users } = props;

 useEffect(() => {
  getUsers();
  document.title = 'People | Aniverse';
 }, [getUsers]);

 if (users.loading) return <Loading />;
 return (
  <>
   <UserItem users={props.users.data} />
  </>
 );
}

const mapStateToProps = (state) => {
 return {
  users: state.usersAllReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  getUsers: () => {
   dispatch(getAllUsers());
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllUser);
