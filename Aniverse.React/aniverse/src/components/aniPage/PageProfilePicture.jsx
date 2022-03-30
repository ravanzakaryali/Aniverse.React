import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { pageChangeProfile } from '../../redux/actions/pageAction';
import ProfilePPStyle from './ProfilePPStyle';

function PageProfilePicture(props) {
 const { changeProfilePicture } = props;
 const [imageSrc, setImageUrl] = useState('');
 const [profileState, setProfileState] = useState();

 const formData = new FormData();
 const { profilPicture } = props;

 const profileChange = (e) => {
  setImageUrl(URL.createObjectURL(e.target.files[0]));
  if (e.currentTarget.files) {
   let uploadFile = e.target.files;
   if (uploadFile[0].type.includes('image')) {
    const reader = new FileReader();
    reader.onload = (f) => {
     setProfileState({
      postFile: uploadFile,
     });
    };
    reader.readAsDataURL(uploadFile[0]);
    let fileValue = e.currentTarget.value;
    setProfileState(fileValue);
   }
  }
 };

 useEffect(() => {
  setImageUrl(profilPicture);
 }, [profilPicture]);

 return (
  <>
   <div className="profile-picture-parent">
    <ProfilePPStyle profilPicture={profilPicture} />
    {props.userAuth.id === props.page.data.userId ? (
     <button
      onClick={(e) => {
       e.currentTarget.parentElement.nextElementSibling.click();
      }}
      data-bs-toggle="modal"
      data-bs-target="#pageProfileChnageModal"
      className="btn profile-img-btn">
      <FontAwesomeIcon icon="fa-solid fa-camera" />
     </button>
    ) : (
     ''
    )}
   </div>
   <input onChange={profileChange} className="d-none" type="file" />
   <div
    className="modal profile-img-modal fade"
    id="pageProfileChnageModal"
    aria-labelledby="pageProfileChnageModalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-xl">
     <div className="modal-content">
      <div className="modal-body">
       <img alt="modal" src={imageSrc}></img>
      </div>
      <form
       className="modal-footer profile-picture-modal"
       onSubmit={(e) => {
        e.preventDefault();
        formData.append('imageFile', profileState.postFile[0]);
        changeProfilePicture(props.page.data.id, formData, imageSrc);
       }}>
       <button type="button" className="btn btn-light" data-bs-dismiss="modal">
        Close
       </button>
       <button
        type="submit"
        className="btn btn-primary"
        data-bs-dismiss="modal">
        Save
       </button>
      </form>
     </div>
    </div>
   </div>
  </>
 );
}

function mapStateToProps(state) {
 return {
  page: state.pageReducer,
  userAuth: state.userLoginReducer,
 };
}

function mapDispatchToProps(dispatch) {
 return {
  changeProfilePicture: (id, profilePicture, imageSrc) => {
   dispatch(pageChangeProfile(id, profilePicture, imageSrc));
  },
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageProfilePicture);
