import React, { useState } from 'react';
import { connect } from 'react-redux';

function PostMenu(props) {
 const [activeSave, setStateSave] = useState(false);
 const [activeMenu, setActiveMenu] = useState(false);

 return (
  <div className="post-menu col-1">
   {props.userId !== props.userAuth.id ? (
    <>
     <button className="btn">
      <i className="fa-regular fa-bookmark"></i>
     </button>
    </>
   ) : (
    <>
     <button
      className="btn"
      onClick={() => {
       setActiveMenu(!activeMenu);
      }}>
      <i className="fa-solid fa-ellipsis"></i>
     </button>
     {activeMenu ? (
      <div className="post-menu-active">
       <div className="post-menu-item">
        <button className="btn">
         <i class="fa-solid fa-pen"></i>Modified
        </button>
       </div>
       <div className="post-menu-item">
        <button className="btn">
         <i class="fa-solid fa-trash"></i>Remove
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
