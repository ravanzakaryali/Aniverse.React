import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getArchivePost, getSavePost } from '../../../redux/actions/postAction';
import Posts from '../../post/Posts';

function PostSave(props) {
 const { postSaveRequest } = props;
 const [comRender, setComRender] = useState(false);
 useEffect(() => {
  postSaveRequest(1, 100);
 }, [postSaveRequest, comRender]);

 console.log(props);
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
  posts: state.postSaveReducer,
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
