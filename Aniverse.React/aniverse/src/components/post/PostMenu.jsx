import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { IoMdArchive } from 'react-icons/io';

import { postSave } from '../../redux/actions/postAction';
import PostDeleteModal from './PostDeleteModal';

function PostMenu(props) {
 const { postSaveRequest, comRender, setComRender } = props;
 const [activeSave, setStateSave] = useState(true);
 const [activeMenu, setActiveMenu] = useState(false);
 const [deleteModalActive, setDeleteModalActive] = useState(false);
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
  <>
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
       <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
      </button>
      {activeMenu ? (
       <div className="post-menu-active">
        <div className="post-menu-item">
         <button className="btn">
          Modified <FontAwesomeIcon className="icon" icon="fa-solid fa-pen" />
         </button>
        </div>
        <div className="post-menu-item">
         <button className="btn">
          Archive <IoMdArchive className="icon" />
         </button>
        </div>
        <div className="post-menu-item">
         <button
          onClick={() => {
           setActiveMenu(false);
           setDeleteModalActive(true);
          }}
          className="btn">
          Remove <FontAwesomeIcon className="icon" icon="fa-solid fa-trash" />
         </button>
        </div>
       </div>
      ) : (
       ''
      )}
     </>
    )}
   </div>
   {deleteModalActive ? (
    <PostDeleteModal
     postId={props.postId}
     setDeleteModalActive={setDeleteModalActive}
     deleteModalActive={deleteModalActive}
    />
   ) : (
    ''
   )}
  </>
 );
}

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
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostMenu);
