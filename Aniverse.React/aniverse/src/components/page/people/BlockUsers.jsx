import React, { useEffect, useState } from 'react';
import UserItem from './UserItem';
import { getBlcokUsers } from '../../../redux/actions/userActions';
import { connect } from 'react-redux';

function BlockUsers(props) {
 const [comRender, setComRender] = useState({});
 const { getBlockUsers } = props;
 useEffect(() => {
  getBlockUsers();
 }, [comRender, getBlockUsers]);
 console.log(comRender);
 return (
  <>
   <UserItem setComRender={setComRender} users={props.users} />
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  users: state.userReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  getBlockUsers: () => {
   dispatch(getBlcokUsers());
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlockUsers);
