import React, { useState, useEffect } from 'react';
import Users from '../user/Users';
import Animals from '../Animal/AnimalsFriend';
import { connect } from 'react-redux';
import { getUserFriend } from '../../redux/actions/userActions';
import { getFriendAnimals } from '../../redux/actions/animalAction';

function Sidebar(props) {
 const { getFriend } = props;
 const { getFriendAnimal } = props;
 const userLogin = JSON.parse(localStorage.getItem('loginUser'));
 const username = userLogin.username;
 useEffect(() => {
  getFriend(username);
  getFriendAnimal(username);
 }, []);
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
  getFriend: (username) => {
   dispatch(getUserFriend(username));
  },
  getFriendAnimal: (userState) => {
   dispatch(getFriendAnimals(userState));
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
