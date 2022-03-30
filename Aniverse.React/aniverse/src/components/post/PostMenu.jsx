import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { MdOutlineAutoDelete } from 'react-icons/md';

import {
 postModal,
 postModalAction,
 postSave,
} from '../../redux/actions/postAction';
import PostDeleteModal from './PostDeleteModal';
import PostArchiveModal from './PostArchiveModal';
import PostEditModal from './PostEditModal';
import Restore from './Restore';

const PostMenu = (props) => {
 const { postSaveRequest, postModalRequest, post } = props;
 const [activeSave, setStateSave] = useState(true);
 const [activeMenu, setActiveMenu] = useState(false);
 const [postSave, setPostSave] = useState({});

 const postSaveSubmit = (e) => {
  e.preventDefault();
  postSaveRequest(postSave);
 };

 const postModalClick = () => {
  postModalRequest(post);
 };

 useEffect(() => {
  if (post.isSave) {
   setStateSave(!activeSave);
  }
 }, []);
 return (
  <>
   <div className="post-menu col-1">
    {window.location.pathname.includes('recycle') ||
    window.location.pathname.includes('archive') ? (
     <Restore post={post} />
    ) : props.userId !== props.userAuth.id ? (
     <>
      <form onSubmit={postSaveSubmit}>
       <button
        onClick={() => {
         setPostSave({ postId: post.id, isSave: activeSave });
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
       <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
      </button>
      {activeMenu ? (
       <div className="post-menu-active">
        <div className="post-menu-item">
         <button
          onClick={postModalClick}
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#editPostModal">
          <FiEdit className="icon" /> Modified
         </button>
        </div>
        <div className="post-menu-item">
         <button
          onClick={postModalClick}
          data-bs-toggle="modal"
          data-bs-target="#archivePostModal"
          className="btn">
          <RiInboxArchiveLine className="icon" /> Archive
         </button>
        </div>
        <div className="post-menu-item">
         <button
          data-bs-toggle="modal"
          data-bs-target="#deletePostModal"
          onClick={() => {
           setActiveMenu(false);
           postModalClick();
          }}
          className="btn">
          <MdOutlineAutoDelete className="icon" /> Remove
         </button>
        </div>
       </div>
      ) : (
       ''
      )}
     </>
    )}
   </div>
  </>
 );
};

const mapStateToProps = (state) => {
 return {
  userAuth: state.userLoginReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  postSaveRequest: (postData) => {
   dispatch(postSave(postData));
  },
  postModalRequest: (post) => {
   dispatch(postModal(post));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostMenu);
