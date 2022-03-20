import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../../redux/actions/userActions';
import UserItem from './UserItem';

function AllUser(props) {
 const [comRender, setComRender] = useState({});
 const { getUsers } = props;

 useEffect(() => {
  getUsers();
 }, [getUsers, comRender]);
 return (
  <>
   <UserItem setComRender={setComRender} users={props.users} />
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
