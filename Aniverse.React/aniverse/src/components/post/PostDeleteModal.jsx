import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { postDelete } from '../../redux/actions/postAction';

function PostDeleteModal(props) {
 const { deleteRequest } = props;
 const { postId, setDeleteModalActive } = props;
 return (
  <div>
   <div className="modal post-delete-modal" style={{ display: 'block' }}>
    <div className="modal-dialog modal-dialog-centered">
     <div className="modal-content">
      <div className="modal-header">
       <h5 className="modal-title">Delete</h5>
       <button
        className="btn"
        type="button"
        onClick={() => setDeleteModalActive(false)}>
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
       </button>
      </div>
      <div className="modal-body">
       <p>Deleted posts are stored here</p>
       <form
        className="form-modal"
        onSubmit={(e) => {
         e.preventDefault();
         deleteRequest(postId);
         setDeleteModalActive(false);
        }}>
        <div className="modal-footer">
         <button
          onClick={() => {
           setDeleteModalActive(false);
          }}
          type="button"
          className="btn btn-light">
          Cancel
         </button>
         <button type="submit" className="btn btn-primary">
          Delete post
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
  user: state.userNavbarReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  deleteRequest: (formData) => {
   dispatch(postDelete(formData));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDeleteModal);
