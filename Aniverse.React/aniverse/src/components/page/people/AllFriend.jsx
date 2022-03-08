import React, { useEffect } from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import { getUserFriend } from '../../../redux/actions/userActions';

function AllFriend(props) {
 const { getFriend } = props;
 useEffect(() => {
  getFriend(props.userAuth.username);
 }, [getFriend, props.userAuth.username]);
 return (
  <>
   <UserItem users={props.users} />
  </>
 );
}
function mapStateToProps(state) {
 return {
  users: state.friendReducer,
  userAuth: state.userNavbarReducer,
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
