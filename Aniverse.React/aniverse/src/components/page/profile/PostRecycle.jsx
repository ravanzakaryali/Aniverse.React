import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
 getArchivePost,
 getRecyclePost,
} from '../../../redux/actions/postAction';
import Posts from '../../post/Posts';

function PostArchive(props) {
 const { postRecycleRequest } = props;
 useEffect(() => {
  postRecycleRequest(1, 10);
 }, [postRecycleRequest]);

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
  postRecycleRequest: (page, size) => {
   dispatch(getRecyclePost(page, size));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostArchive);
