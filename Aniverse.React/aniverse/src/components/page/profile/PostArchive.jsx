import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getArchivePost } from '../../../redux/actions/postAction';
import Posts from '../../post/Posts';

function PostArchive(props) {
 const { postArhiveRequest } = props;
 const [comRender, setComRender] = useState(false);
 useEffect(() => {
  postArhiveRequest(1, 100);
 }, [postArhiveRequest, comRender]);

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
  posts: state.postArchiveReducer,
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
