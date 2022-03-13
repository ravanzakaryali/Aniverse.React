import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { postSave } from '../../redux/actions/postAction';

function PostMenu(props) {
 const { postSaveRequest } = props;
 const [activeSave, setStateSave] = useState(true);
 const [activeMenu, setActiveMenu] = useState(false);
 const [postSave, setPostSave] = useState({});

 const postSaveSubmit = (e) => {
  e.preventDefault();
  postSaveRequest(postSave);
 };

 useEffect(() => {
  if (props.isSave) {
   setStateSave(!activeSave);
  }
 }, []);

 return (
  <div className="post-menu col-1">
   {props.userId !== props.userAuth.id ? (
    <>
     <form onSubmit={postSaveSubmit}>
      <button
       onClick={() => {
        setPostSave({ postId: props.postId, isSave: activeSave });
        setStateSave(!activeSave);
       }}
       className="btn save-post">
       {activeSave ? <BsBookmark /> : <BsFillBookmarkFill />}
      </button>
     </form>
    </>
   ) : (
    <>
     <button
      className="btn menu-controller-btn"
      onClick={() => {
       setActiveMenu(!activeMenu);
      }}>
      <i className="fa-solid fa-ellipsis"></i>
     </button>
     {activeMenu ? (
      <div className="post-menu-active">
       <div className="post-menu-item">
        <button className="btn">
         Modified<i className="fa-solid fa-pen"></i>
        </button>
       </div>
       <div className="post-menu-item">
        <button className="btn">
         Remove<i className="fa-solid fa-trash"></i>
        </button>
       </div>
      </div>
     ) : (
      ''
     )}
    </>
   )}
  </div>
 );
}

const mapStateToProps = (state) => {
 return {
  posts: state.postReducer,
  userAuth: state.userNavbarReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  postSaveRequest: (postData) => {
   dispatch(postSave(postData));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostMenu);
