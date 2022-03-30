import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { getPageAll } from '../../redux/actions/pageAction';
import { getFriendAllPost } from '../../redux/actions/postAction';
import Loading from '../loading/Loading';
import PagePhotoIntro from '../PagePhotoIntro';
import PhotosIntro from '../photos/PhotosIntro';
import Posts from '../post/Posts';
import PageAbout from './PageAbout';
import PagePostAdd from './pagePostAdd';
import PagePosts from './PagePosts';

function HomePage(props) {
 const { getPosts } = props;
 const { userId } = props.page.data;
 const { id } = props.user;
 const pagename = useParams().pagename;

 useEffect(() => {
  getPosts(1, 10, pagename);
 }, []);
 return (
  <>
   <div className="col-5 col">
    <PageAbout />
    <PagePhotoIntro />
   </div>
   <div className="col-7 col">
    {id === userId ? <PagePostAdd /> : ''}

    <PagePosts posts={props.posts} />
   </div>
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  posts: state.postsReducer,
  page: state.pageReducer,
  user: state.userLoginReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  getPosts: (page, size, pagename) => {
   dispatch(getPageAll(page, size, pagename));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
