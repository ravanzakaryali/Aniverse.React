import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../../redux/actions/userActions';
import jwtDecode from 'jwt-decode';
import UserItem from '../page/people/UserItem';

function AllUser(props) {
 const { getUsers } = props;
 const [usersState, setUsersState] = useState({});

 const userJwt = jwtDecode(localStorage.getItem('token'));

 useEffect(() => {
  setUsersState();
  getUsers();
 }, [getUsers, usersState]);
 return (
  <>
   <UserItem users={props.users} />
  </>
 );
}

function mapStateToProps(state) {
 return {
  users: state.usersReducer,
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
