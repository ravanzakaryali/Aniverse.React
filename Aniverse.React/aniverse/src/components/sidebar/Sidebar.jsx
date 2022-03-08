import React, { useState, useEffect } from 'react';
import Users from '../user/Users';
import Animals from '../Animal/AnimalsFriend';
import { connect } from 'react-redux';
import { getUserFriend } from '../../redux/actions/userActions';
import { getFriendAnimals } from '../../redux/actions/animalAction';

function Sidebar(props) {
 const { getFriend } = props;
 const { getFriendAnimal } = props;

 useEffect(() => {
  getFriend(props.userAuth.username);
  getFriendAnimal(props.userAuth.username);
 }, [getFriend, getFriendAnimal, props.userAuth.username]);
 return (
  <>
   {/* <Users users={props.users} /> */}
   {/* <Animals animals={props.animals} /> */}
  </>
 );
}

function mapStateToProps(state) {
 return {
  users: state.friendReducer,
  animals: state.animalReducer,
  userAuth: state.userNavbarReducer,
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  getFriend: (username) => {
   dispatch(getUserFriend(username));
  },
  getFriendAnimal: (userState) => {
   dispatch(getFriendAnimals(userState));
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
