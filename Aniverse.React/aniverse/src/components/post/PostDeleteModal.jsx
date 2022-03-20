import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { postDelete } from '../../redux/actions/postAction';

function PostDeleteModal(props) {
 const { deleteRequest } = props;
 const { postId } = props;
 return (
  <div>
   <div
    className="modal fade post-delete-modal"
    id="deletePostModal"
    aria-labelledby="deletePostModalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
     <div className="modal-content">
      <div className="modal-header">
       <h5 className="modal-title">Delete</h5>
       <button
        className="btn"
        type="button"
        data-bs-dismiss="modal"
        aria-label="Close">
        <FontAwesomeIcon className="icon" icon="fa-solid fa-xmark" />
       </button>
      </div>
      <div className="modal-body">
       <p>Deleted posts are stored here</p>
       <form
        className="form-modal"
        onSubmit={(e) => {
         e.preventDefault();
         deleteRequest(postId);
         props.setComRender(postId + 'Success');
        }}>
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
          className="btn btn-primary">
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
