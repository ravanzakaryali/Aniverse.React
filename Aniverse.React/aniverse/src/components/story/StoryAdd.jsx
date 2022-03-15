import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUserNavbar } from '../../redux/actions/userActions';
import StoryModal from './StoryModal';

function StoryAdd(props) {
 const { getUser } = props;
 const [modalActive, setModalActive] = useState(false);

 const userLogin = JSON.parse(localStorage.getItem('loginUser'));
 useEffect(() => {
  if (props.user) {
   getUser(userLogin.username);
  }
 }, [modalActive]);
 return (
  <div className="col-4 col-sm-3 col-lg-2">
   <div
    className="story"
    onClick={() => {
     setModalActive(!modalActive);
    }}>
    <img
     alt="Story Add"
     className="story-img"
     src={
      props.user.profilPicture == null
       ? `../../img/user.png`
       : `${props.user.profilPicture}`
     }
    />
    <FontAwesomeIcon icon="fa-solid fa-plus" className=" story-add-icon" />
    <div className="story-add-plus">
     <p className="story-text">The story of the day</p>
    </div>
   </div>
   {modalActive ? (
    <StoryModal
     setModal={setModalActive}
     addStory={props.addStory}
     setStory={props.setStory}
    />
   ) : (
    ''
   )}
  </div>
 );
}

const mapStateToProps = (state) => {
 return {
  user: state.userNavbarReducer,
  stories: state.storyFriendReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  getUser: (username) => {
   dispatch(getUserNavbar(username));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryAdd);
