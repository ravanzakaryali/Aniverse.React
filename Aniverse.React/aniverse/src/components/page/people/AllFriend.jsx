import React, { useEffect, useState } from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import { getUserFriend } from '../../../redux/actions/userActions';
import { getAllFriends } from '../../../redux/actions/friendAction';

function AllFriend(props) {
 const { getFriend } = props;
 const [comRender, setComRender] = useState({});
 const loginUser = JSON.parse(localStorage.getItem('loginUser'));
 useEffect(() => {
  getFriend(loginUser.username, 1, 100);
 }, [comRender, getFriend, loginUser.username]);
 return (
  <>
   <UserItem setComRender={setComRender} users={props.users} />
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
