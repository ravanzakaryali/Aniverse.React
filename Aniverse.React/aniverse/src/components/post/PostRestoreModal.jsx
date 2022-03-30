import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { postRestore } from '../../redux/actions/postAction';

function PostRestoreModal(props) {
 const { restoreRequest } = props;
 const { post } = props;

 return (
  <div>
   <div
    className="modal fade post-delete-modal"
    id="restorePostModal"
    aria-labelledby="restorePostModalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
     <div className="modal-content">
      <div className="modal-header">
       <h5 className="modal-title">Restore post?</h5>
       <button
        className="btn"
        type="button"
        data-bs-dismiss="modal"
        aria-label="Close">
        <FontAwesomeIcon className="icon" icon="fa-solid fa-xmark" />
       </button>
      </div>
      <div className="modal-body">
       <p>Are you sure that you want to restore this post?</p>
       <form
        className="form-modal"
        onSubmit={(e) => {
         e.preventDefault();
         restoreRequest(post.id);
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
          Restore
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
  restoreRequest: (id) => {
   dispatch(postRestore(id));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostRestoreModal);
