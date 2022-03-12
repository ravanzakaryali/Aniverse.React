import React, { useState } from 'react';
import { connect } from 'react-redux';

function PostMenu(props) {
 const [activeSave, setStateSave] = useState(false);
 const [activeMenu, setActiveMenu] = useState(false);

 return (
  <div className="post-menu col-1">
   {props.userId !== props.userAuth.id ? (
    <>
     <button className="btn save-post">
      <i className="fa-regular fa-bookmark"></i>
      <i className="fa-solid fa-bookmark d-none"></i>
     </button>
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

export default connect(mapStateToProps)(PostMenu);
