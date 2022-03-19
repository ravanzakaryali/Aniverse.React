import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFriendAnimals } from '../../redux/actions/animalAction';

const AnimalsFriend = (props) => {
 const { getFriendAnimal } = props;
 const username = JSON.parse(localStorage.getItem('loginUser')).username;
 useEffect(() => {
  getFriendAnimal(username, 1, 4);
 }, [getFriendAnimal, username]);
 return (
  <div className="users-section">
   <h3 className="section-title">Animals</h3>
   {props.animals.map((animal) => (
    <div className="sidebar-user col-12" key={animal.id}>
     <Link to={`animal/${animal.animalname}`} className="account-profile">
      <img
       className="users-profile"
       src={
        animal.profilePicture == null
         ? `../../img/animal.jpg`
         : `${animal.profilePicture}`
       }
       alt=""
      />
      <p className="users-name">{animal.name}</p>
     </Link>
    </div>
   ))}

   <button className="btn btn-loadmore">
    More animals
    <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
   </button>
  </div>
 );
};
const mapStateToProps = (state) => {
 return {
  animals: state.friendsAnimalReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  getFriendAnimal: (username, page, size) => {
   dispatch(getFriendAnimals(username, page, size));
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(AnimalsFriend);
