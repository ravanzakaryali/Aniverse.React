import React, { useState, useEffect } from 'react';
import UserRequest from '../user/UserRequest';
import { connect } from 'react-redux';
import { getFriendRequest } from '../../redux/actions/userActions';
import Sponsored from '../Sponsored/Sponsored';
import PageIntro from '../aniPage/PageIntro';
import { getAllPage, userPageFollow } from '../../redux/actions/pageAction';

function SidebarRight(props) {
 const { getUserPageRequest } = props;
 const id = JSON.parse(localStorage.getItem('loginUser')).id;
 useEffect(() => {
  if (id) {
   getUserPageRequest(id);
  }
 }, [getUserPageRequest, id]);
 console.log(props);
 return (
  <>
   <UserRequest />
   <PageIntro pages={props.pages} />
   {/* <Sponsored /> */}
  </>
 );
}

const mapStateToProps = (state) => {
 return {
  pages: state.pageAllReducer,
  user: state.userLoginReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  getUserPageRequest: (id) => {
   dispatch(userPageFollow(id));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarRight);
