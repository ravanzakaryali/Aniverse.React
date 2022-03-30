import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../redux/actions/postAction';
import { selectAnimal } from '../../redux/actions/animalAction';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdAddPhotoAlternate } from 'react-icons/md';

function PostAdd(props) {
 const formData = new FormData();
 const [disable, setDisable] = useState(true);

 const { post } = props;
 const { selectAnimal } = props;
 const [
  postState = {
   animalId: '',
   content: '',
   imageFile: '',
  },
  setPostState,
 ] = useState({});

 useEffect(() => {
  selectAnimal();
 }, []);

 const postSubmit = (e) => {
  e.preventDefault();
  if (postState.postFile) {
   for (let i = 0; i < postState.postFile.length; i++) {
    formData.append('imageFile', postState.postFile[i]);
   }
  }
  formData.append('content', postState.content);
  if (postState.animalId) formData.append('animalId', postState.animalId);
  if (postState) {
   post(formData);
  }
  document.getElementById('form').reset();
 };

 const customStyles = {
  option: (provided, state) => ({
   ...provided,
   color: state.isSelected ? 'white' : 'black',
   backgroundColor: state.isSelected ? '#2f26c8' : 'white',
  }),
 };

 return (
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
      <div className="animals">
       <Select
        styles={customStyles}
        placeholder="Animal"
        onChange={(e) => {
         setPostState({
          ...postState,
          ...{ animalId: e.id },
         });
        }}
        options={props.select}
        getOptionLabel={(options) => options['name']}
        getOptionValue={(options) => options['id']}
       />
      </div>
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
 );
}

const mapStateToProps = (state) => {
 return {
  posts: state.postReducer,
  select: state.selectAnimalReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  post: (formData) => {
   dispatch(createPost(formData));
  },
  selectAnimal: () => {
   dispatch(selectAnimal());
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostAdd);
