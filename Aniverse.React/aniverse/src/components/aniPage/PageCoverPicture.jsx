import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { pageChangeCover } from '../../redux/actions/pageAction';

function PageCoverPicture(props) {
 const { changeCoverPicture } = props;
 const [imageSrc, setImageUrl] = useState('');
 const [coverState, setCoverState] = useState();

 const formData = new FormData();
 const { coverPicture } = props;

 const coverChange = (e) => {
  setImageUrl(URL.createObjectURL(e.target.files[0]));
  if (e.currentTarget.files) {
   let uploadFile = e.target.files;
   if (uploadFile[0].type.includes('image')) {
    const reader = new FileReader();
    reader.onload = (f) => {
     setCoverState({
      postFile: uploadFile,
     });
    };
    reader.readAsDataURL(uploadFile[0]);
    let fileValue = e.currentTarget.value;
    setCoverState(fileValue);
   }
  }
 };

 useEffect(() => {
  if (coverPicture) {
   setImageUrl(coverPicture);
  } else {
   setImageUrl(imageSrc);
  }
 }, [coverPicture]);

 return (
  <>
   <div className="cover-picture-parent">
    {coverPicture ? (
     <img alt={'Page'} className="cover-picture" src={coverPicture} />
    ) : (
     <div className="default_bg_style"></div>
    )}
   </div>
   {props.userAuth.id === props.page.data.userId ? (
    <button
     onClick={(e) => {
      e.currentTarget.nextElementSibling.click();
     }}
     data-bs-toggle="modal"
     data-bs-target="#pageCoverChnageModal"
     className="btn cover-img-btn">
     <FontAwesomeIcon icon="fa-solid fa-camera" />
    </button>
   ) : (
    ''
   )}
   <input onChange={coverChange} className="d-none" type="file" />
   <div
    className="modal profile-img-modal fade"
    id="pageCoverChnageModal"
    aria-labelledby="pageCoverChnageModalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-xl">
     <div className="modal-content cover">
      <div className="modal-body">
       <img alt="modal" src={imageSrc}></img>
      </div>
      <form
       className="modal-footer profile-picture-modal"
       onSubmit={(e) => {
        e.preventDefault();
        formData.append('imageFile', coverState.postFile[0]);
        changeCoverPicture(props.page.data.id, formData, imageSrc);
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
  changeCoverPicture: (id, coverPicture, imageSrc) => {
   dispatch(pageChangeCover(id, coverPicture, imageSrc));
  },
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageCoverPicture);
