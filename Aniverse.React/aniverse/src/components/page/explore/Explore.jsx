import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../../../redux/actions/postAction';
import Posts from '../../post/Posts';

function Explore(props) {
 const { postAllRequest } = props;
 const [comRender, setComRender] = useState(1);
 useEffect(() => {
  postAllRequest();
 }, [comRender]);
 return (
  <>
   <div className="row explore">
    <div className="col-3"></div>
    <div className="col-6">
     <Posts
      setComRender={setComRender}
      comRender={comRender}
      posts={props.posts}
     />
    </div>
    <div className="col-3"></div>
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
  postAllRequest: () => {
   dispatch(getAllPosts());
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
