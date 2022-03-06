import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Intro from './Intro';
import FriendsIntro from '../friend/FriendsIntro';
import PostAdd from '../post/PostAdd';
import Posts from '../post/Posts';
import AnimalsUser from '../Animal/AnimalsUser';
import PhotosIntro from '../photos/PhotosIntro';
import { connect } from 'react-redux';
import { getPost } from '../../redux/actions/postAction';

function Profile(props) {
 const username = useParams().username;
 const { userPost } = props;
 useEffect(() => {
  userPost(username);
 }, [userPost, username]);
 return (
  <>
   <div className="right-sidebar col-5">
    <Intro />
    <FriendsIntro username={username} />
    <PhotosIntro />
   </div>
   <div className="col-7">
    <AnimalsUser />
    {window.location.pathname.includes('user') ? (
     props.user.id === props.userAuth.id ? (
      <PostAdd />
     ) : (
      ''
     )
    ) : (
     ''
    )}
    <Posts posts={props.posts} />
   </div>
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  user: state.userReducer,
  userAuth: state.userNavbarReducer,
  posts: state.postReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  userPost: (username) => {
   dispatch(getPost(username));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
