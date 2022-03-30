import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getArchivePost, getSavePost } from '../../../redux/actions/postAction';
import Posts from '../../post/Posts';

function PostSave(props) {
 const { postSaveRequest } = props;
 useEffect(() => {
  postSaveRequest(1, 10);
 }, [postSaveRequest]);

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
  postSaveRequest: (page, size) => {
   dispatch(getSavePost(page, size));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostSave);
