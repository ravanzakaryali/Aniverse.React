import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllAnimals } from '../../../redux/actions/animalAction';
import Animal from '../../Animal/Animal';
import { FaPaw } from 'react-icons/fa';
import AnimalsBg from './img/animals.png';

function Animals(props) {
 const { getAnimals, animalsAll } = props;
 const [activeAnimal, setActiveAnimal] = useState(false);
 const [animalname, setAnimalname] = useState();
 useEffect(() => {
  document.title = 'Animals | Aniverse';
  getAnimals(1, 10);
 }, [getAnimals]);
 return (
  <div className="row animals-page">
   <div className="col-3 sidebar-animals-item">
    <div className="sidebar-title">
     <p>Animals</p>
    </div>
    {animalsAll.map((animal) => (
     <Link
      to={`/animals/${animal.animalname}`}
      className="animal-item"
      onClick={() => {
       setActiveAnimal(true);
       setAnimalname(animal.animalname);
      }}
      key={animal.id}>
      <div className="profile-img">
       <img
        className="animal-img"
        src={
         animal.profilePicture == null
          ? `../../img/animal.jpg`
          : `${animal.profilePicture}`
        }
        alt={`${animal.name} profile`}
       />
      </div>
      <div className="animal-item-content">
       <h4>{animal.name}</h4>
      </div>
     </Link>
    ))}
   </div>
   <div className="col-9 animal-profile">
    {activeAnimal ? (
     <Animal animalname={animalname} />
    ) : (
     <div className="no-select">
      <div className="bg-image">
       {/* <FaPaw className="icon" /> */}
       <img className="paw-img" alt="animals" src={AnimalsBg} />
      </div>
      <p>Select animal's names to preview their profile.</p>
     </div>
    )}
   </div>
  </div>
 );
}
const mapStateToProps = (state) => {
 return {
  animalsAll: state.allAnimalsReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  getAnimals: (page, size) => {
   dispatch(getAllAnimals(page, size));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Animals);
