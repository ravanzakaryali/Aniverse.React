import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
 getArchivePost,
 getRecyclePost,
} from '../../../redux/actions/postAction';
import Posts from '../../post/Posts';

function PostArchive(props) {
 const { postRecycleRequest } = props;
 const [comRender, setComRender] = useState(false);
 console.log(props);
 useEffect(() => {
  postRecycleRequest(1, 100);
 }, [postRecycleRequest, comRender]);

 return (
  <>
   <Posts
    comRender={comRender}
    setComRender={setComRender}
    posts={props.posts}
   />
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  posts: state.postRecycleReducer,
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
