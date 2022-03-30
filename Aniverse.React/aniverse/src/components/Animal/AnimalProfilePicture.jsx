import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { animalChangeProfile } from '../../redux/actions/animalAction';

const AnimalProfilePicture = (props) => {
 const { changeProfile, profilPicture, animalId } = props;
 const [imageSrc, setImageUrl] = useState(profilPicture);
 const [profile, setProfile] = useState({});
 const formData = new FormData();
 useEffect(() => {
  setImageUrl(profilPicture);
 }, [profilPicture]);
 return (
  <>
   <div className="profile-img-parent">
    <img
     alt="Profile"
     className="profile-img"
     src={profilPicture == null ? `../../img/animal.jpg` : `${profilPicture}`}
    />
    <div className="change-profile-picture">
     <input
      onChange={(e) => {
       setImageUrl(URL.createObjectURL(e.target.files[0]));
       if (e.currentTarget.files) {
        let uploadFile = e.target.files;
        if (uploadFile[0].type.includes('image')) {
         const reader = new FileReader();
         reader.onload = (f) => {
          setProfile({
           postFile: uploadFile,
          });
         };
         reader.readAsDataURL(uploadFile[0]);
         let fileValue = e.currentTarget.value;
         setProfile(fileValue);
        }
       }
      }}
      type="file"
      className="d-none"
     />
     <button
      data-bs-toggle="modal"
      data-bs-target="#animalCoverPicture"
      onClick={(e) => {
       e.currentTarget.previousElementSibling.click();
      }}
      className="btn">
      <FontAwesomeIcon icon="fa-solid fa-camera" />
     </button>
    </div>
   </div>
   <div
    className="modal fade modal-animal-cover"
    id="animalCoverPicture"
    aria-labelledby="animalCoverPictureLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-xl">
     <div className="modal-content profile">
      <div className="modal-body">
       <img alt="Profile" className="profile" src={imageSrc}></img>
      </div>
      <form
       className="modal-footer animal"
       onSubmit={(e) => {
        e.preventDefault();
        formData.append('imageFile', profile.postFile[0]);
        changeProfile(animalId, formData, imageSrc);
       }}>
       <button type="button" className="btn btn-light" data-bs-dismiss="modal">
        Close
       </button>
       <button
        type="submit"
        data-bs-dismiss="modal"
        aria-label="Close"
        className="btn btn-primary">
        Save changes
       </button>
      </form>
     </div>
    </div>
   </div>
  </>
 );
};

const mapStateToProps = (state) => {
 return {
  request: state.animalChangePictureReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  changeProfile: (id, picture, imageSrc) => {
   dispatch(animalChangeProfile(id, picture, imageSrc));
  },
 };
};

export default connect(
 mapStateToProps,
 mapDispatchToProps,
)(AnimalProfilePicture);
