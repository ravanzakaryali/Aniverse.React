import React, { useState, useEffect } from 'react';
import Users from '../user/Users';
import Animals from '../Animal/AnimalsFriend';
import { connect } from 'react-redux';
import { getUserFriend } from '../../redux/actions/userActions';
import { getFriendAnimals } from '../../redux/actions/animalAction';

import jwtDecode from 'jwt-decode';

function Sidebar(props) {
 const { getFriend } = props;
 const { getFriendAnimal } = props;
 const [userState, setUserState] = useState({});
 const user = jwtDecode(localStorage.getItem('token')).username;
 useEffect(() => {
  setUserState(user);
  getFriend();
  getFriendAnimal(user);
 }, [userState]);
 return (
  <>
   <Users users={props.users} />
   <Animals animals={props.animals} />
  </>
 );
}

function mapStateToProps(state) {
 return {
  users: state.friendReducer,
  animals: state.animalReducer,
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  getFriend: () => {
   dispatch(getUserFriend());
  },
  getFriendAnimal: (userState) => {
   dispatch(getFriendAnimals(userState));
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
