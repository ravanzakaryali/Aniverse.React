import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getFriendRequest } from '../../../redux/actions/friendAction';
import UserItem from './UserItem';

function AllFriendRequest(props) {
 const [comRender, setComRender] = useState({});
 const { getRequest } = props;

 useEffect(() => {
  getRequest();
 }, [getRequest, comRender]);
 return (
  <>
   <UserItem setComRender={setComRender} users={props.request} />
  </>
 );
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
