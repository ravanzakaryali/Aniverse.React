import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { postStory } from '../../redux/actions/storyAction';

function StoryModal(props) {
 const { story } = props;
 const [storyState, setStoryState] = useState({});
 const [imageState, setStateImage] = useState();

 const formData = new FormData();

 useEffect(() => {
  setStateImage(imageState);
 }, [imageState]);

 return (
  <div className="modal" style={{ display: 'block' }}>
   <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
     <div className="modal-header">
      <h5 className="modal-title">Add Story</h5>
      <button
       type="button"
       className="btn-close"
       data-bs-dismiss="modal"
       aria-label="Close"
       onClick={() => props.setModal(false)}>
       <i className="fa-solid fa-xmark"></i>
      </button>
     </div>
     <div className="modal-body">
      <form
       className="form-modal"
       onSubmit={(e) => {
        e.preventDefault();
        formData.append('storyFile', storyState.storyFile);
        formData.append('content', storyState.name);
        props.setStory(storyState);
        story(formData);
        props.setModal(false);
       }}>
       <div className="modal-img">
        <img
         onClick={() => {
          document.getElementById('fileUpload').click();
         }}
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
        <span className="add-story-plus">
         <i className="fa-solid fa-cloud-arrow-up"></i>
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
        <button type="submit" className="btn btn-primary">
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
  user: state.userNavbarReducer,
  stories: state.storyFriendReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  story: (formData) => {
   dispatch(postStory(formData));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryModal);
