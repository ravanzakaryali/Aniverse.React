import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { MdAddPhotoAlternate } from 'react-icons/md';
import { connect } from 'react-redux';
import { createPost } from '../../redux/actions/postAction';
function PagePostAdd(props) {
 const formData = new FormData();
 const [disable, setDisable] = useState(true);
 const { post } = props;
 const { id } = props.page.data;
 const [
  postState = {
   pageId: id,
   content: '',
   postFile: '',
  },
  setPostState,
 ] = useState();
 const postSubmit = (e) => {
  e.preventDefault();

  if (postState.postFile) {
   for (let i = 0; i < postState.postFile.length; i++) {
    formData.append('imageFile', postState.postFile[i]);
   }
  }
  formData.append('content', postState.content);
  if (postState.animalId) formData.append('animalId', postState.animalId);
  formData.append('pageId', postState.pageId);
  if (postState) {
   post(formData);
  }
  document.getElementById('form').reset();
 };

 return (
  <>
   <div className="col-12 posts-col">
    <form onSubmit={postSubmit} className="row post-add" id="form">
     <div className="content col-12">
      <textarea
       name="content"
       onChange={(e) => {
        const content = e.target.value;
        setPostState({ ...postState, ...{ content } });
        if (e.target.value) {
         setDisable(false);
        } else {
         setDisable(true);
        }
       }}
       className="col-12"
       type="text"
       placeholder="What do you think about animals?"></textarea>
      <div className="post-add-footer">
       <div
        onClick={(e) => {
         document.querySelector('.fileUpload').click();
        }}
        className="image col-1">
        <MdAddPhotoAlternate />
       </div>
       <div>
        <div className="image-select d-none">
         <FontAwesomeIcon icon="fa-solid fa-images" />
         <span className="fileSaveIndex image-select-text"></span>
         <span
          onClick={(e) => {
           document.querySelector('.fileUpload').value = '';
           e.currentTarget.parentElement.className = 'd-none image-select';
          }}
          className="clear-select-files">
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
         </span>
        </div>
       </div>
       <button disabled={disable} type="submit" className=" btn btn-primary">
        Add post <FontAwesomeIcon className="icon" icon="fa-solid fa-plus" />
       </button>
      </div>
     </div>
     <div className="image-content col-3">
      <input
       multiple
       className="fileUpload"
       onChange={(e) => {
        if (e.currentTarget.files) {
         let uploadFile = e.target.files;
         let fileValue;
         [...uploadFile].forEach((file) => {
          if (file.type.includes('image')) {
           const reader = new FileReader();
           reader.onload = (f) => {
            setPostState({
             ...postState,
             postFile: uploadFile,
            });
           };
           reader.readAsDataURL(file);
           fileValue = fileValue + e.currentTarget.value;
           if (e.currentTarget.files.length) {
            document.querySelector('.image-select').classList.remove('d-none');
            document.querySelector(
             '.fileSaveIndex',
            ).innerText = `${e.currentTarget.files.length} Photos`;
           }
          }
         });
        }
       }}
       hidden
       type="file"
      />
     </div>
    </form>
   </div>
  </>
 );
}

const mapStateToProps = (state) => {
 return {
  posts: state.postReducer,
  page: state.pageReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  post: (formData) => {
   dispatch(createPost(formData));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PagePostAdd);
