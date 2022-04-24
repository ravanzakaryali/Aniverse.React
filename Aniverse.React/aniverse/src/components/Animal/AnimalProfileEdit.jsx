import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
 deleteAnimal,
 updateAnimalProfile,
} from '../../redux/actions/animalAction';
import { IoSettingsSharp } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import { BiTrashAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router';

function AnimalProfileEdit(props) {
 const { updateProfile, deleteProfile } = props;
 const [editAnimal, setEditAnimal] = useState({});
 const navigate = useNavigate();
 const [menuActive, setMenuActive] = useState(false);
 const { bio, id, birthday, breed, name, user } = props.animal.data;

 const onChangeValue = (e) => {
  const { name, value } = e.target;
  setEditAnimal({ ...editAnimal, ...{ [name]: value } });
 };
 function editSubmit(e) {
  e.preventDefault();
  updateProfile(id, editAnimal);
 }
 useEffect(() => {
  setEditAnimal({ name: name, breed: breed, bio: bio });
 }, []);
 return (
  <>
   <div
    className="btn icon-btn"
    onClick={() => {
     setMenuActive(!menuActive);
    }}>
    <IoSettingsSharp />
   </div>
   {menuActive ? (
    <div className="animal-setting">
     <li>
      <button
       className="btn"
       data-bs-toggle="modal"
       data-bs-target="#deleteAnimal">
       <span>
        <BiTrashAlt className="icon" />
       </span>
       Delete
      </button>
     </li>
     <li>
      <button
       className="btn"
       data-bs-toggle="modal"
       data-bs-target="#editAnimal">
       <span>
        <FiEdit className="icon" />
       </span>
       Edit
      </button>
     </li>
    </div>
   ) : (
    ''
   )}
   <div
    className="modal fade animal-edit-modal"
    id="editAnimal"
    tabindex="-1"
    aria-labelledby="editAnimalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
     <form onSubmit={editSubmit} className="modal-content">
      <div className="modal-header">
       <h5 className="modal-title">Animal edit</h5>
       <button
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
       <button
        data-bs-dismiss="modal"
        aria-label="Close"
        type="submit"
        className="btn btn-primary">
        Save changes
       </button>
      </div>
     </form>
    </div>
   </div>
   <div
    className="modal fade post-delete-modal"
    id="deleteAnimal"
    tabindex="-1"
    aria-labelledby="deleteAnimalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
     <div className="modal-content">
      <div className="modal-header">
       <h5 className="modal-title" id="deleteAnimalLabel">
        Delete Animal?
       </h5>
       <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <p>Are you sure that you want to archive this post?</p>
       <form
        className="form-modal"
        onSubmit={(e) => {
         e.preventDefault();
         deleteProfile(id);
         return navigate(`/user/${user.username}`);
        }}>
        <div className="modal-footer">
         <button
          data-bs-dismiss="modal"
          type="button"
          className="btn btn-opacity-primary">
          Cancel
         </button>
         <button
          data-bs-dismiss="modal"
          type="submit"
          className="btn btn-danger">
          Delete
         </button>
        </div>
       </form>
      </div>
     </div>
    </div>
   </div>
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
  updateProfile: (id, profileData) => {
   dispatch(updateAnimalProfile(id, profileData));
  },
  deleteProfile: (id) => {
   dispatch(deleteAnimal(id));
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(AnimalProfileEdit);
