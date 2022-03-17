import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function AnimalProfileEdit(props) {
 const [editModal, setEditModal] = useState();
 const [editAnimal, setEditAnimal] = useState({});

 const { bio, id, birthday, breed, name } = props.animal;

 function modalActive() {
  setEditModal(!editModal);
 }
 const onChangeValue = (e) => {
  const { name, value } = e.target;
  setEditAnimal({ ...editAnimal, ...{ [name]: value } });
 };
 function editSubmit(e) {
  e.preventDefault();
  console.log(editAnimal);
 }
 return (
  <>
   <div className="edit-button">
    <button onClick={modalActive} className="btn btn-light">
     Edit
    </button>
   </div>
   {editModal ? (
    <div
     className="modal show animal-edit-modal"
     style={{ display: 'block' }}
     tabIndex="-1">
     <div className="modal-dialog">
      <form onSubmit={editSubmit} className="modal-content">
       <div className="modal-header">
        <h5 className="modal-title">Animal edit</h5>
        <button
         onClick={modalActive}
         type="button"
         className="btn-close"
         data-bs-dismiss="modal"
         aria-label="Close"></button>
       </div>
       <div className="modal-body">
        <div className="edit-form">
         <label className="label">Animal name</label>
         <input
          type="text"
          onChange={onChangeValue}
          className="bio-input"
          name="name"
          defaultValue={name}
         />
        </div>
        <div className="edit-form">
         <label className="label">Bio</label>
         <textarea
          name="bio"
          onChange={onChangeValue}
          className="bio-textarea"
          defaultValue={bio}
         />
        </div>
        <div className="edit-form">
         <label className="label">Breed</label>
         <input
          type="text"
          onChange={onChangeValue}
          className="bio-input"
          name="breed"
          defaultValue={breed}
         />
        </div>
       </div>
       <div className="modal-footer">
        <button type="submit" className="btn btn-primary">
         Save changes
        </button>
       </div>
      </form>
     </div>
    </div>
   ) : (
    ''
   )}
  </>
 );
}

const mapStateToProps = (state) => {
 return {
  animal: state.getAnimalReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  // login: (loginState) => {
  //     dispatch(authLogin(loginState));
  // }
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(AnimalProfileEdit);
