import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getFriendRequest } from '../../../redux/actions/friendAction';
import UserItem from './UserItem';

function AllFriendRequest(props) {
 const { getRequest } = props;

 useEffect(() => {
  getRequest();
  document.title = 'Frineds request | Aniverse';
 }, [getRequest]);

 return <>{<UserItem users={props.request.data} />}</>;
}
function mapStateToProps(state) {
 return {
  request: state.getFriendRequestReducer,
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  getRequest: () => {
   dispatch(getFriendRequest());
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllFriendRequest);
