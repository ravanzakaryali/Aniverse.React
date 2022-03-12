import React, { useState, useEffect } from 'react';
import { getFriendAllPost } from '../../redux/actions/postAction';
import { connect } from 'react-redux';
import Posts from './Posts';

function PostSetting(props) {
 const [comRender, setComRender] = useState(1);
 const { allPosts } = props;

 useEffect(() => {
  allPosts(1, 20);
 }, [allPosts, comRender]);

 return (
  <>
   <Posts
    posts={props.posts}
    setComRender={setComRender}
    comRender={comRender}
   />
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  posts: state.postReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  allPosts: (page, size) => {
   dispatch(getFriendAllPost(page, size));
  },
  // logout: (history) => {
  //  dispatch(LogOutAuthAction(history));
  // },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostSetting);
