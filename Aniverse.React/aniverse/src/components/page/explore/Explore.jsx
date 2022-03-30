import { useWindowSize } from '@react-hook/window-size';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { getAllPage } from '../../../redux/actions/pageAction';
import { getAllPosts } from '../../../redux/actions/postAction';
import { getAllProdct } from '../../../redux/actions/productAction';
import { getStories } from '../../../redux/actions/storyAction';
import PageIntro from '../../aniPage/PageIntro';
import Posts from '../../post/Posts';
import Sponsored from '../../Sponsored/Sponsored';
import Stories from '../../story/Stories';

function Explore(props) {
 const { postAllRequest, getAllStories, getAllPageRequest, getAllProductReq } =
  props;
 const token = localStorage.getItem('token');
 const navigate = useNavigate();

 useEffect(() => {
  getAllStories();
  postAllRequest(1, 10);
  getAllPageRequest(1, 10);
  getAllProductReq(1, 10);
  document.title = 'Explore | Aniverse';
 }, [getAllStories, postAllRequest, token]);
 console.log(props.products);
 const [width] = useWindowSize();
 if (token === null) return <>{navigate('/authenticate/login')}</>;

 return (
  <>
   <div className="row explore main">
    <div className="col-3 fixed-sidebar">
     {width > 769 ? <PageIntro pages={props.pages} /> : ''}
    </div>
    <div className="col-12 col-md-6 static-page">
     <div className="story-row">
      <Stories stories={props.stories} />
     </div>
     <Posts posts={props.posts} />
    </div>
    <div className="col-3 fixed-sidebar-right ">
     {width > 769 ? <Sponsored products={props.products} /> : ''}
    </div>
   </div>
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  posts: state.postsReducer,
  stories: state.storiesReducer,
  pages: state.pageAllReducer,
  products: state.allProductReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  getAllStories: () => {
   dispatch(getStories());
  },
  postAllRequest: (page, size) => {
   dispatch(getAllPosts(page, size));
  },
  getAllPageRequest: (page, size) => {
   dispatch(getAllPage(page, size));
  },
  getAllProductReq: (page, size) => {
   dispatch(getAllProdct(page, size));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
