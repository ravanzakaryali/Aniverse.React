import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';
import CommentAdd from './CommentAdd';
import Like from './Like';

function LikeCommentView(props) {
 const [commentView, setCommentView] = useState(false);
 const { post } = props;
 return (
  <>
   <div className="post-event">
    <div className="col-6 event like">
     <Like postId={post.id} likes={post.likes} />
    </div>
    <div className="col-6 event comment">
     <button
      className="btn btn-comment"
      onClick={() => {
       setCommentView(!commentView);
      }}>
      <FontAwesomeIcon className="icon" icon="fa-regular fa-comment" />
      Comment
     </button>
    </div>
   </div>
   {commentView ? (
    <div className="comments">
     <div className="add-comment">
      <CommentAdd postId={post.id} user={props.user} />
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
