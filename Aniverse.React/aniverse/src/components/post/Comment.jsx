import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactTimeAgo from 'react-time-ago';
import { commentCreate } from '../../redux/actions/commentAction';

function Comment(props) {
 const { commentUser } = props;
 const [commentState, setcommentState] = useState({});
 return (
  <>
   <div className="add-comment">
    <form
     onSubmit={(e) => {
      e.preventDefault();
      commentUser(commentState);
      document.querySelector('.add-comment-input input').value = '';
     }}>
     <div className="">
      <img
       className="user-comment-profile-img"
       src={
        props.user.profilPicture == null
         ? `../../img/user.png`
         : `${props.user.profilPicture}`
       }
      />
     </div>
     <div className="add-comment-input">
      <input
       onChange={(e) => {
        const content = e.target.value;
        const postId = props.postId;
        setcommentState({
         ...commentState,
         ...{ postId, content },
        });
       }}
       className="comment-add"
       placeholder={`Write a comment, ${props.user.firstname}...`}
      />
     </div>
     <button type="submit" className="btn btn-primary">
      Send
     </button>
    </form>
   </div>
   {props.comments.map((comment) => (
    <div className="user-comment" key={comment.id}>
     <>
      <div className="user-profile">
       <img
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
  user: state.userReducer,
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
