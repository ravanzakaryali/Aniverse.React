import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { storyCreate } from '../../../redux/actions/storyAction';

function StoryCreate(props) {
 const [imageSrc, setImageSrc] = useState();
 const { story } = props;
 const [storyState, setStoryState] = useState();
 const fileUploadClick = () => document.getElementById('fileUpload').click();
 const submitStory = (e) => {
  e.preventDefault();
  story(storyState);
 };
 useEffect(() => {}, [imageSrc]);

 return (
  <div>
   <div className="archive">
    <div className="archive-title">Add Story</div>
    <div className="animal animal-create-profile">
     <form onSubmit={submitStory} className="form-create">
      <div className="form-item">
       <div className="form-header">
        {imageSrc ? (
         <img onClick={fileUploadClick} alt="story-create" src={imageSrc} />
        ) : (
         <div onClick={fileUploadClick} className="story-create-style"></div>
        )}
        <button onClick={fileUploadClick} className="btn add-story-plus">
         <FontAwesomeIcon className="icon" icon="fa-solid fa-cloud-arrow-up" />
         Upload image
        </button>
       </div>
       <div className="form-item">
        <label className="create-label">Story Content</label>
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
            setImageSrc(URL.createObjectURL(e.target.files[0]));
           };
           reader.readAsDataURL(uploadFile);
          }
         }
        }}
        type="file"
        id="fileUpload"
        className="d-none"
       />
      </div>
      <div className="buttons">
       <button className="btn btn-primary">Add</button>
      </div>
     </form>
    </div>
   </div>
  </div>
 );
}
const mapStateToProps = (state) => {
 return {
  story: state.storyModal,
  stories: state.storiesReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  story: (formData) => {
   dispatch(storyCreate(formData));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryCreate);
