import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { commentCreate } from '../../redux/actions/commentAction';

function CommentAdd(props) {
 const { commentUser } = props;
 const { comRender, setComRender } = props;
 const [commentState, setcommentState] = useState({});

 return (
  <form
   onSubmit={(e) => {
    e.preventDefault();
    commentUser(commentState);
    document.querySelector('.add-comment-input input').value = '';
    setComRender(comRender + 1);
   }}>
   <div className="">
    <img
     alt="Profile"
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

export default connect(mapStateToProps, mapDispatchToProps)(CommentAdd);
