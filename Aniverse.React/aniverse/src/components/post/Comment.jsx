import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';
import { commentCreate } from '../../redux/actions/commentAction';
import CommentAdd from './CommentAdd';

function Comment(props) {
 const [replyCommentState, setComment] = useState();
 console.log(replyCommentState);
 return (
  <>
   {props.comments.map((comment) => (
    <div>
     <div className="user-comment" key={comment.id}>
      <>
       <div className="user-profile">
        <img
         alt="Profile"
         className="user-comment-profile-img"
         src={
          comment.user.profilPicture == null
           ? `../../img/user.png`
           : `${comment.user.profilPicture}`
         }
        />
       </div>
       <div className="user-comment-content">
        <Link to={`/user/${comment.user.username}`} className="profile-name">
         {comment.user.firstname} {comment.user.lastname}
        </Link>
        <p>{comment.content}</p>
        <div className="comment-footer">
         <p className="date">
          <ReactTimeAgo
           date={Date.parse(comment.senderDate)}
           locale="en-US"
           timeStyle="round-minute"
          />
         </p>
        </div>
       </div>
      </>
     </div>
    </div>
   ))}
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  // commentsCreate: state.commentReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  commentUser: (comment) => {
   dispatch(commentCreate(comment));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
