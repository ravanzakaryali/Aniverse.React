import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactTimeAgo from 'react-time-ago';
import { commentCreate } from '../../redux/actions/commentAction';
import CommentAdd from './CommentAdd';

function Comment(props) {
 return (
  <>
   {props.comments.map((comment) => (
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
       <p className="profile-name">
        {comment.user.firstname} {comment.user.lastname}
       </p>
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
   ))}
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  commentsCreate: state.commentReducer,
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
