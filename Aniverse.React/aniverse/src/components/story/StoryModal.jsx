import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { storyCreate } from '../../redux/actions/storyAction';

function StoryModal(props) {
 const { story } = props;
 const [storyState, setStoryState] = useState({});
 const [imageState, setStateImage] = useState();

 const fileUploadClick = () => document.getElementById('fileUpload').click();

 useEffect(() => {
  setStateImage(imageState);
 }, [imageState]);

 return (
  <div
   className="modal fade story-modal"
   id="storyModal"
   aria-labelledby="storyModal"
   aria-hidden="true">
   <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
     <div className="modal-header">
      <h5 className="modal-title">Add Story</h5>
      <button
       type="button"
       className="btn-close"
       data-bs-dismiss="modal"
       aria-label="Close">
       <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </button>
     </div>
     <div className="modal-body">
      <form
       className="form-modal"
       onSubmit={(e) => {
        e.preventDefault();
        story(storyState);
       }}>
       <div className="modal-img">
        <img
         onClick={fileUploadClick}
         alt="Story add"
         className="story-add-image"
         id="storyAdd"
         src={
          imageState == null
           ? props.user.profilPicture === null
             ? `../../img/user.png`
             : `${props.user.profilPicture}`
           : `${imageState}`
         }
        />
        <span onClick={fileUploadClick} className="add-story-plus">
         <FontAwesomeIcon className="icon" icon="fa-solid fa-cloud-arrow-up" />
         Upload image
        </span>
        <textarea
         placeholder="Story content"
         name="name"
         onChange={(e) => {
          setStoryState({
           ...storyState,
           name: e.target.value,
          });
         }}></textarea>
       </div>
       <input
        onChange={(e) => {
         if (e.target.files && e.target.files[0]) {
          let uploadFile = e.target.files[0];
          if (uploadFile.type.includes('image')) {
           const reader = new FileReader();
           reader.onload = (f) => {
            setStoryState({
             ...storyState,
             storyFile: uploadFile,
             imageSrc: URL.createObjectURL(e.target.files[0]),
            });
            setStateImage(f.target.result);
           };
           reader.readAsDataURL(uploadFile);
          }
         }
        }}
        type="file"
        id="fileUpload"
        className="d-none"
       />

       <div className="modal-footer">
        <button
         data-bs-dismiss="modal"
         aria-label="Close"
         type="submit"
         className="btn btn-primary">
         Add story
        </button>
       </div>
      </form>
     </div>
    </div>
   </div>
  </div>
 );
}
const mapStateToProps = (state) => {
 return {
  story: state.storyModal,
  user: state.userLoginReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  story: (formData) => {
   dispatch(storyCreate(formData));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryModal);
