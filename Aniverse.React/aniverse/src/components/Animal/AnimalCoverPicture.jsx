import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { animalChangeCover } from '../../redux/actions/animalAction';

function AnimalCoverPicture(props) {
 const { changeCover, coverPicture, animalId } = props;
 const [imageSrc, setImageUrl] = useState(coverPicture);
 const [cover, setCover] = useState({});

 useEffect(() => {
  setImageUrl(coverPicture);
 }, [coverPicture]);

 const formData = new FormData();
 return (
  <>
   {coverPicture ? (
    <img
     alt="Cover"
     className="cover-img animal-cover-picture"
     src={coverPicture}
    />
   ) : (
    <div className="cover-style"></div>
   )}
   <div className="cover-change-button">
    <input
     onChange={(e) => {
      setImageUrl(URL.createObjectURL(e.target.files[0]));
      if (e.currentTarget.files) {
       let uploadFile = e.target.files;
       if (uploadFile[0].type.includes('image')) {
        const reader = new FileReader();
        reader.onload = (f) => {
         setCover({
          postFile: uploadFile,
         });
        };
        reader.readAsDataURL(uploadFile[0]);
        let fileValue = e.currentTarget.value;
        setCover(fileValue);
       }
      }
     }}
     type="file"
     className="d-none"
    />
    <button
     data-bs-toggle="modal"
     data-bs-target="#coverPicture"
     onClick={(e) => {
      e.currentTarget.previousElementSibling.click();
     }}
     className="btn cover-img-btn">
     <FontAwesomeIcon icon="fa-solid fa-camera" />
    </button>
   </div>
   <div
    className="modal modal-animal-cover fade"
    id="coverPicture"
    aria-labelledby="coverPictureLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-xl">
     <div className="modal-content">
      <div className="modal-body">
       <img alt="Cover" className="cover" src={imageSrc}></img>
      </div>
      <form
       className="modal-footer animal"
       onSubmit={(e) => {
        e.preventDefault();
        formData.append('imageFile', cover.postFile[0]);
        changeCover(animalId, formData, imageSrc);
       }}>
       <button type="button" className="btn btn-light" data-bs-dismiss="modal">
        Close
       </button>
       <button
        type="submit"
        data-bs-dismiss="modal"
        className="btn btn-primary">
        Save
       </button>
      </form>
     </div>
    </div>
   </div>
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  request: state.animalChangePictureReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  changeCover: (id, picture, imageSrc) => {
   dispatch(animalChangeCover(id, picture, imageSrc));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimalCoverPicture);
