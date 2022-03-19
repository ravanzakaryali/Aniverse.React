import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { chagePorfile } from '../../../redux/actions/userActions';

function UserProfilePicture(props) {
 const { changeProfilePicture } = props;
 const { comRender, setComRender } = props;

 const [imageSrc, setImageUrl] = useState('');
 const [profileState, setProfileState] = useState();
 const [activeMenu, setActiveMenu] = useState(false);
 const formData = new FormData();
 const { profilPicture } = props;
 useEffect(() => {}, [
  activeMenu,
  imageSrc,
  profileState,
  changeProfilePicture,
  comRender,
 ]);
 return (
  <>
   <div className="profile-picture-parent">
    <img
     alt="profile"
     className="profil-img"
     src={profilPicture == null ? `../../img/user.png` : profilPicture}
    />
    {props.userAuth.id === props.user.id ? (
     <button
      onClick={(e) => {
       e.currentTarget.parentElement.nextElementSibling.click();
      }}
      className="btn profile-img-btn">
      <FontAwesomeIcon icon="fa-solid fa-camera" />
     </button>
    ) : (
     ''
    )}
   </div>
   <input
    onChange={(e) => {
     setActiveMenu(!activeMenu);
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
    }}
    className="d-none"
    type="file"
   />
   {activeMenu ? (
    <div
     className="modal profile-img-modal fade show"
     id="exampleModal"
     tabIndex="-1"
     aria-labelledby="exampleModalLabel"
     aria-hidden="true"
     style={{ display: 'block' }}>
     <div className="modal-dialog modal-xl">
      <div className="modal-content">
       <div className="modal-body">
        <img src={`${imageSrc}`}></img>
       </div>
       <form
        className="modal-footer"
        onSubmit={(e) => {
         e.preventDefault();
         formData.append('imageFile', profileState.postFile[0]);
         changeProfilePicture(formData);
         setActiveMenu(!activeMenu);
         setComRender(comRender + 1);
        }}>
        <button
         onClick={() => {
          setActiveMenu(!activeMenu);
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
}

function mapStateToProps(state) {
 return {
  userAuth: state.userLoginReducer,
  user: state.userReducer,
 };
}

function mapDispatchToProps(dispatch) {
 return {
  changeProfilePicture: (profilePicture) => {
   dispatch(chagePorfile(profilePicture));
  },
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePicture);
