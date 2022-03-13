import React, { useState } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import CommentAdd from './CommentAdd';
import Like from './Like';

function LikeCommentView(props) {
 const [commentView, setCommentView] = useState(false);
 const { post, setComRender, comRender } = props;
 return (
  <>
   <div className="post-event">
    <div className="col-6 event like">
     <Like
      postId={post.id}
      likes={post.likes}
      setComRender={setComRender}
      comRender={comRender}
     />
    </div>
    <div className="col-6 event comment">
     <button
      className="btn btn-comment"
      onClick={() => {
       setCommentView(!commentView);
      }}>
      <i className="fa-regular fa-comment"></i>
      Comment
     </button>
    </div>
   </div>
   {commentView ? (
    <div className="comments">
     <div className="add-comment">
      <CommentAdd
       setComRender={setComRender}
       comRender={comRender}
       postId={post.id}
       user={props.user}
      />
     </div>
     <Comment comments={post.comments} />
    </div>
   ) : (
    ''
   )}
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  userAuth: state.authReducer,
  user: state.userLoginReducer,
 };
};
export default connect(mapStateToProps)(LikeCommentView);
