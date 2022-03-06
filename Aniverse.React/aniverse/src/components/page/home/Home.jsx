import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Sidebar from '../../sidebar/Sidebar';
import Story from '../../story/Story';
import PostAdd from '../../post/PostAdd';
import SiderbarRight from '../../sidebar/SiderbarRight';
import { getPosts } from '../../../redux/actions/postAction';
import Posts from '../../post/Posts';

function Home(props) {
 const { allPosts } = props;
 useEffect(() => {
  allPosts(1, 10);
 }, [allPosts]);

 const token = localStorage.getItem('token');
 if (token == null) return <Navigate to="/login" />;

 return (
  <>
   <div className="main row">
    <React.Fragment>
     <div className="fixed-sidebar col-3">
      <Sidebar />
     </div>
     <div className="static-page col-6">
      <Story />
      <PostAdd />
      <Posts posts={props.posts} />
     </div>
     <div className="fixed-sidebar-right col-3">
      <SiderbarRight />
     </div>
    </React.Fragment>
   </div>
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  auth: state.authReducer,
  posts: state.postReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  allPosts: (page, size) => {
   dispatch(getPosts(page, size));
  },
  // logout: (history) => {
  //  dispatch(LogOutAuthAction(history));
  // },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
