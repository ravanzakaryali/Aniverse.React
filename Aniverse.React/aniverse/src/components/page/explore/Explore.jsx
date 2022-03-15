import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../../../redux/actions/postAction';
import { getStories } from '../../../redux/actions/storyAction';
import Posts from '../../post/Posts';
import Sponsored from '../../Sponsored/Sponsored';
import Stories from '../../story/Stories';

function Explore(props) {
 const { postAllRequest, getAllStories } = props;
 const [comRender, setComRender] = useState(1);
 useEffect(() => {
  document.title = 'Explore | Aniverse';
  getAllStories();
  postAllRequest();
 }, [comRender]);
 return (
  <>
   <div className="row explore main">
    <div className="col-3 fixed-sidebar">
     <Sponsored />
    </div>
    <div className="col-6 static-page">
     <div className="story-row">
      <Stories stories={props.stories} />
     </div>
     <Posts
      setComRender={setComRender}
      comRender={comRender}
      posts={props.posts}
     />
    </div>
    <div className="col-3 fixed-sidebar-right "></div>
   </div>
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  posts: state.postReducer,
  stories: state.storiesReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  postAllRequest: () => {
   dispatch(getAllPosts());
  },
  getAllStories: () => {
   dispatch(getStories());
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
