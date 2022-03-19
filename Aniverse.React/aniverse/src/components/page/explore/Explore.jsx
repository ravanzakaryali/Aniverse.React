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
  getAllStories();
  postAllRequest();
  document.title = 'Explore | Aniverse';
 }, [comRender, getAllStories, postAllRequest]);
 console.log(props);
 return (
  <>
   <div className="row explore main">
    <div className="col-3 fixed-sidebar"></div>
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
    <div className="col-3 fixed-sidebar-right ">
     <Sponsored />
    </div>
   </div>
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  posts: state.postReducer,
  stories: state.storiesAllReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  getAllStories: () => {
   dispatch(getStories());
  },
  postAllRequest: () => {
   dispatch(getAllPosts());
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
