import React, { useState, useEffect } from 'react';
import { getFriendAllPost } from '../../redux/actions/postAction';
import { connect } from 'react-redux';
import Posts from './Posts';
import InfiniteScroll from 'react-infinite-scroller';

function PostSetting(props) {
 const { allPosts } = props;

 useEffect(() => {
  allPosts(1, 10);
 }, []);

 return (
  <>
   <Posts posts={props.posts} />
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  posts: state.postsReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  allPosts: (page, size) => {
   dispatch(getFriendAllPost(page, size));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostSetting);
