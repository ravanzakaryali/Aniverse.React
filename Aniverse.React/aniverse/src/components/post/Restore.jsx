import React from 'react';
import { connect } from 'react-redux';
import { MdRestore } from 'react-icons/md';
import { postModal } from '../../redux/actions/postAction';

const Restore = (props) => {
 const { postModalRequest, post } = props;
 const postModalClick = () => {
  postModalRequest(post);
 };
 if (window.location.pathname.includes('setting'))
  return (
   <>
    <button
     onClick={postModalClick}
     className="btn"
     data-bs-toggle="modal"
     data-bs-target="#restorePostModal">
     <MdRestore />
    </button>
   </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
 return {
  postModalRequest: (post) => {
   dispatch(postModal(post));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restore);
