import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getFriendAllPost } from '../../redux/actions/postAction';
import PhotosIntro from '../photos/PhotosIntro';
import Posts from '../post/Posts';
import PageAbout from './PageAbout';
import PhotoIntroPage from './PhotoIntroPage';

function HomePage(props) {
 const [comRender, setComRender] = useState({});
 const { allPosts, comState } = props;

 useEffect(() => {
  allPosts(1, 20);
 }, [allPosts, comRender, comState]);
 return (
  <>
   <div className="col-5 col">
    <PageAbout />
    <PhotoIntroPage />
   </div>
   <div className="col-7 col">
    <Posts posts={props.posts} setComRender={setComRender} />
   </div>
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
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
