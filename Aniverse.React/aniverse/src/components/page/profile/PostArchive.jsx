import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getArchivePost } from '../../../redux/actions/postAction';
import Posts from '../../post/Posts';

function PostArchive(props) {
 const { postArhiveRequest } = props;
 useEffect(() => {
  postArhiveRequest(1, 10);
 }, [postArhiveRequest]);

 return <Posts posts={props.posts} />;
}
const mapStateToProps = (state) => {
 return {
  posts: state.postsReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  postArhiveRequest: (page, size) => {
   dispatch(getArchivePost(page, size));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostArchive);
