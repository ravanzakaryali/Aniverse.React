import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getFriendRequest } from '../../../redux/actions/friendAction';
import Loading from '../../common/Loading';
import UserItem from './UserItem';

function AllFriendRequest(props) {
 const { getRequest } = props;

 useEffect(() => {
  getRequest(1, 18);
  document.title = 'Frineds request | Aniverse';
 }, [getRequest]);
 if (props.request.loading) return <Loading />;
 return <>{<UserItem users={props.request.data} />}</>;
}
function mapStateToProps(state) {
 return {
  request: state.getFriendRequestReducer,
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  getRequest: (page, size) => {
   dispatch(getFriendRequest(page, size));
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllFriendRequest);
