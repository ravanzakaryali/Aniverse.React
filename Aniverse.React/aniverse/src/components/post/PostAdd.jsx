import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../redux/actions/postAction';
import { selectAnimal } from '../../redux/actions/animalAction';
import Select from 'react-select';

function PostAdd(props) {
 const { post } = props;
 const { selectAnimal } = props;
 const [postState, setPostState] = useState({});

 useEffect(() => {
  selectAnimal();
 }, [postState]);

 const formData = new FormData();

 return (
  <div className="col-12">
   <form
    onSubmit={(e) => {
     e.preventDefault();
     if (postState.postFile) {
      for (let i = 0; i < postState.postFile.length; i++) {
       formData.append('imageFile', postState.postFile[i]);
      }
     }
     formData.append('content', postState.content);
     formData.append('animalId', postState.animalId);
     if (postState) {
      post(formData);
     }
    }}
    className="row post-add">
    <div className="content col-12">
     <textarea
      name="content"
      onChange={(e) => {
       const content = e.target.value;
       setPostState({ ...postState, ...{ content } });
      }}
      className="col-12"
      type="text"
      placeholder="What do you think about animals?"></textarea>
     <div className="animals">
      <Select
       isSearchable
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
      <i className="fa-solid fa-images"></i>
     </div>
     <div>
      <div className="image-select d-none">
       <i className="fa-solid fa-images"></i>
       <span className="fileSaveIndex image-select-text"></span>
       <span
        onClick={(e) => {
         console.log(postState.postFile);
         document.querySelector('.fileUpload').value = '';
         e.currentTarget.parentElement.className = 'd-none image-select';
        }}
        className="clear-select-files">
        <i className="fa-solid fa-xmark"></i>
       </span>
      </div>
     </div>
     <button type="submit" className=" btn btn-primary">
      Add post
     </button>
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
        // setPostState({ ...postState, ...{ fileValue } });
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
