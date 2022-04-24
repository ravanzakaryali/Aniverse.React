import React, { useEffect, useState } from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import { getUserFriend } from '../../../redux/actions/userActions';
import { getAllFriends } from '../../../redux/actions/friendAction';
import Loading from '../../common/Loading';

function AllFriend(props) {
 const { getFriend, users } = props;
 const loginUser = JSON.parse(localStorage.getItem('loginUser'));
 useEffect(() => {
  getFriend(loginUser.username, 1, 10);
  document.title = 'Frineds | Aniverse';
 }, [getFriend, loginUser.username]);
 if (users.loading) return <Loading />;
 return (
  <>
   <UserItem users={users.data} />
  </>
 );
}
function mapStateToProps(state) {
 return {
  users: state.friendReducer,
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  getFriend: (username, page, size) => {
   dispatch(getAllFriends(username, page, size));
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllFriend);
