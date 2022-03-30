import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { postArchive, postDelete } from '../../redux/actions/postAction';

function PostArchiveModal(props) {
 const { archiveRequest } = props;
 const { post } = props;
 return (
  <div>
   <div
    className="modal fade post-delete-modal"
    id="archivePostModal"
    aria-labelledby="archivePostModalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
     <div className="modal-content">
      <div className="modal-header">
       <h5 className="modal-title">Archive post?</h5>
       <button
        className="btn"
        type="button"
        data-bs-dismiss="modal"
        aria-label="Close">
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
       </button>
      </div>
      <div className="modal-body">
       <p>Are you sure that you want to archive this post?</p>
       <form
        className="form-modal"
        onSubmit={(e) => {
         e.preventDefault();
         archiveRequest(post.id);
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
          Archive
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
  archiveRequest: (formData) => {
   dispatch(postArchive(formData));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostArchiveModal);
