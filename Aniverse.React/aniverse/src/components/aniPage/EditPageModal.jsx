import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { pageProfileUpdate } from '../../redux/actions/pageAction';

function EditPageModal(props) {
 const { updateProfile } = props;
 const { about, website, id } = props.page.data;
 const [editPage, setEditPage] = useState({});
 function editSubmit(e) {
  e.preventDefault();
  console.log(editPage);
  updateProfile(id, editPage);
 }
 const onChangeValue = (e) => {
  const { name, value } = e.target;
  setEditPage({ ...editPage, ...{ [name]: value } });
 };
 useEffect(() => {
  setEditPage({ about: about, website: website });
 }, []);
 return (
  <div className="animal-container">
   <div
    className="modal fade animal-edit-modal "
    id="editPage"
    tabIndex="-1"
    aria-labelledby="editPageLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
     <form onSubmit={editSubmit} className="modal-content">
      <div className="modal-header">
       <h5 className="modal-title">Animal edit</h5>
       <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <div className="edit-form">
        <label className="label">About</label>
        <textarea
         name="about"
         onChange={onChangeValue}
         className="bio-textarea"
         defaultValue={about}
        />
       </div>
       <div className="edit-form">
        <label className="label">Website link</label>
        <input
         type="text"
         onChange={onChangeValue}
         className="bio-input"
         name="website"
         defaultValue={website}
        />
       </div>
      </div>
      <div className="modal-footer">
       <button
        data-bs-dismiss="modal"
        aria-label="Close"
        type="submit"
        className="btn btn-primary">
        Save changes
       </button>
      </div>
     </form>
    </div>
   </div>
  </div>
 );
}

const mapStateToProps = (state) => {
 return {
  page: state.pageReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  updateProfile: (id, profileData) => {
   dispatch(pageProfileUpdate(id, profileData));
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditPageModal);
