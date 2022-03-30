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
import Footer from '../../navbar/Footer';

function Profile(props) {
 const username = useParams().username;
 const userLogin = JSON.parse(localStorage.getItem('loginUser'));
 const token = localStorage.getItem('token');
 const navigate = useNavigate();

 const { userPost } = props;
 useEffect(() => {
  userPost(1, 10, username);
 }, [userPost, username]);
 if (token === null) return <>{navigate('/authenticate/login')}</>;

 return (
  <>
   <div className="right-sidebar col-12 col-md-5">
    <Intro />
    <FriendsIntro username={username} />
    <PhotosIntro />
    <Footer />
   </div>
   <div className="center-sidebar col-12 col-md-7">
    <AnimalsUser />
    {window.location.pathname.includes('user') ? (
     props.user.data.id === userLogin.id ? (
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
  posts: state.postsReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  userPost: (page, size, username) => {
   dispatch(getPost(page, size, username));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
