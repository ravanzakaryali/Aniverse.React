import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { chageCover } from '../../../redux/actions/userActions';
import CoverStyle from '../../user/CoverStyle';

function UserCoverPicture(props) {
 const { changeProfilePicture, coverPicture } = props;
 const [imageSrc, setImageUrl] = useState(coverPicture);
 const [profileState, setProfileState] = useState();

 //#region Cover Picture
 const coverPictureChnage = (e) => {
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
 //#endregion

 useEffect(() => {
  setImageUrl(coverPicture);
 }, [coverPicture]);
 const formData = new FormData();
 return (
  <>
   <CoverStyle coverPicture={coverPicture} />
   {props.userAuth.id === props.userId ? (
    <>
     <button
      onClick={(e) => {
       e.currentTarget.nextElementSibling.click();
      }}
      className="btn cover-img-btn"
      data-bs-toggle="modal"
      data-bs-target="#profilePictureModal">
      <FontAwesomeIcon icon="fa-solid fa-camera" />
     </button>
    </>
   ) : (
    ''
   )}
   <input onChange={coverPictureChnage} className="d-none" type="file" />
   <div
    className="modal fade"
    id="profilePictureModal"
    aria-labelledby="profilePictureModalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-xl">
     <div className="modal-content">
      <div className="modal-body">
       <img alt="modal" src={imageSrc}></img>
      </div>
      <form
       className="modal-footer"
       onSubmit={(e) => {
        e.preventDefault();
        formData.append('imageFile', profileState.postFile[0]);
        changeProfilePicture(formData, imageSrc);
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
  userAuth: state.userLoginReducer,
 };
}
function mapDispatchToProps(dispatch) {
 return {
  changeProfilePicture: (profilePicture, imageSrc) => {
   dispatch(chageCover(profilePicture, imageSrc));
  },
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCoverPicture);
