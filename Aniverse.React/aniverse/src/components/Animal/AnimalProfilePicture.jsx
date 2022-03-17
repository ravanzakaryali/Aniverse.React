import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { animalChangeProfile } from '../../redux/actions/animalAction';

const AnimalProfilePicture = (props) => {
 const { changeProfile, profilPicture, animalId } = props;
 const [imageSrc, setImageUrl] = useState('');
 const [profile, setProfile] = useState({});
 const [activeMenu, setActiveMenu] = useState(false);
 const formData = new FormData();
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
       setActiveMenu(true);
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
      onClick={(e) => {
       e.currentTarget.previousElementSibling.click();
      }}
      className="btn">
      <FontAwesomeIcon icon="fa-solid fa-camera" />
     </button>
    </div>
   </div>
   {activeMenu ? (
    <div className="modal modal-animal-cover" style={{ display: 'block' }}>
     <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content profile">
       <div className="modal-body">
        <img className="profile" src={`${imageSrc}`}></img>
       </div>
       <form
        className="modal-footer"
        onSubmit={(e) => {
         e.preventDefault();
         formData.append('imageFile', profile.postFile[0]);
         changeProfile(animalId, formData);
        }}>
        <button
         onClick={() => {
          setActiveMenu(false);
         }}
         type="button"
         className="btn btn-light"
         data-bs-dismiss="modal">
         Close
        </button>
        <button type="submit" className="btn btn-primary">
         Save changes
        </button>
       </form>
      </div>
     </div>
    </div>
   ) : (
    ''
   )}
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
  changeProfile: (id, picture) => {
   dispatch(animalChangeProfile(id, picture));
  },
 };
};

export default connect(
 mapStateToProps,
 mapDispatchToProps,
)(AnimalProfilePicture);
