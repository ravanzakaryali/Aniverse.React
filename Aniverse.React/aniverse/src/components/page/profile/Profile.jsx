import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Intro from './Intro';
import FriendsIntro from '../../friend/FriendsIntro';
import PostAdd from '../../post/PostAdd';
import Posts from '../../post/Posts';
import AnimalsUser from '../../Animal/AnimalsUser';
import PhotosIntro from '../../photos/PhotosIntro';
import { connect } from 'react-redux';
import { getPost } from '../../../redux/actions/postAction';

function Profile(props) {
 const [comRender, setComRender] = useState(1);
 const username = useParams().username;
 const userLogin = JSON.parse(localStorage.getItem('loginUser'));
 const { userPost } = props;
 useEffect(() => {
  userPost(username);
 }, [userPost, username, comRender]);
 return (
  <>
   <div className="right-sidebar col-12 col-md-5">
    <Intro />
    <FriendsIntro username={username} />
    <PhotosIntro />
   </div>
   <div className="center-sidebar col-12 col-md-7">
    <AnimalsUser />
    {window.location.pathname.includes('user') ? (
     props.user.id === userLogin.id ? (
      <PostAdd />
     ) : (
      ''
     )
    ) : (
     ''
    )}
    <Posts
     setComRender={setComRender}
     comRender={comRender}
     posts={props.posts}
    />
   </div>
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  user: state.userReducer,
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
