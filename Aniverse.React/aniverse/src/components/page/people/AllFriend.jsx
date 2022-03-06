import React, { useEffect } from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import { getUserFriend } from '../../../redux/actions/userActions';

function AllFriend(props) {
 const { getFriend } = props;
 useEffect(() => {
  getFriend();
 }, [getFriend]);
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
  getFriend: () => {
   dispatch(getUserFriend());
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllFriend);
