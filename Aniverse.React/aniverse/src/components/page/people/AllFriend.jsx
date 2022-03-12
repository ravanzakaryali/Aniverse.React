import React, { useEffect } from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import { getUserFriend } from '../../../redux/actions/userActions';

function AllFriend(props) {
 const { getFriend } = props;
 const loginUser = JSON.parse(localStorage.getItem('loginUser'));
 useEffect(() => {
  getFriend(loginUser.username);
 }, [getFriend, loginUser.username]);
 return (
  <>
   <UserItem users={props.users} />
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
  getFriend: (username) => {
   dispatch(getUserFriend(username));
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllFriend);
