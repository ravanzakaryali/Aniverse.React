import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../../../../redux/actions/friendAction';

export const AllPeopleButton = (props) => {
 const { userId, addFriendRequest } = props;
 return (
  <>
   <form
    onClick={(e) => {
     e.preventDefault();
     addFriendRequest(userId);
    }}
    className="buttons">
    <button type="submit" className="btn btn-primary">
     <FontAwesomeIcon icon="fa-solid fa-user-plus" />
     Add Friends
    </button>
   </form>
  </>
 );
};

function mapStateToProps(state) {
 return {
  usersRequest: state.friendReducer,
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  addFriendRequest: (userId) => {
   dispatch(addFriend(userId));
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllPeopleButton);
