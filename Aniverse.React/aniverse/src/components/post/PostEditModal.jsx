import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { postEdit } from '../../redux/actions/postAction';

function PostEditModal(props) {
 const { editPostRequest, post } = props;
 const [disableBnt, setDisableBtn] = useState(true);
 const [editContent, setEditContent] = useState({});

 const editChange = (e) => {
  if (e.target.value === e.target.defaultValue) {
   setDisableBtn(true);
  } else {
   setDisableBtn(false);
  }
  setEditContent({ content: e.target.value });
 };
 const editSubmit = (e) => {
  e.preventDefault();
  editPostRequest(post.id, editContent);
 };
 return (
  <div>
   <div
    className="modal fade post-delete-modal"
    id="editPostModal"
    aria-labelledby="editPostModalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
     <div className="modal-content">
      <div className="modal-header">
       <h5 className="modal-title">Edit post?</h5>
       <button
        className="btn"
        type="button"
        data-bs-dismiss="modal"
        aria-label="Close">
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
       </button>
      </div>
      <div className="modal-body">
       <form className="edit-modal-form" onSubmit={editSubmit}>
        <div className="content">
         <textarea
          placeholder="What do you think about animals?"
          className="edit-modal-form-textarea"
          defaultValue={post.content}
          onChange={editChange}></textarea>
        </div>
        <div className="modal-footer">
         <button
          data-bs-dismiss="modal"
          type="button"
          className="btn btn-light">
          Cancel
         </button>
         <button
          data-bs-dismiss="modal"
          type="submit"
          className="btn btn-primary"
          disabled={disableBnt}>
          Save
         </button>
        </div>
       </form>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
const mapStateToProps = (state) => {
 return {
  post: state.postModalReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  editPostRequest: (postId, postData) => {
   dispatch(postEdit(postId, postData));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEditModal);
