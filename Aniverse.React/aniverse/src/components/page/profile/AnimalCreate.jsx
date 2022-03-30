import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import Select from 'react-select';
import { getAnimalCategory } from '../../../redux/actions/animalAction';
import { createAnimal } from '../../../redux/actions/animalAction';
import Loading from './../../loading/Loading';

function AnimalCreate(props) {
 const navigate = useNavigate();
 const { animalCreate, animalCategory, animal } = props;
 const [animalState, setAnimalState] = useState();
 const [disable, setDisable] = useState(true);
 const handleSubmit = (e) => {
  e.preventDefault();
  animalCreate(animalState);
  document.getElementById('form').reset();
  return navigate(`/animal/${animalState.animalname}`);
 };
 const handleChange = (e) => {
  const { name, value } = e.target;
  setAnimalState({ ...animalState, ...{ [name]: value } });
  if (animalState) {
   if (
    animalState.name !== '' &&
    animalState.animalname !== '' &&
    animalState.animalCategoryId !== '' &&
    animalState.birthday
   ) {
    setDisable(false);
   } else {
    setDisable(true);
   }
  }
 };
 useEffect(() => {
  animalCategory();
 }, []);
 return (
  <div>
   <div className="archive">
    <div className="archive-title">Add Pet</div>
    <div className="animal animal-create-profile">
     <form onSubmit={handleSubmit} className="form-create" id="form">
      <div className="form-item">
       <label className="create-label">Animal</label>
       <input name="name" onChange={handleChange} placeholder="Animal" />
      </div>
      <div className="form-item">
       <label className="create-label">Animalname</label>
       <input
        name="animalname"
        onChange={handleChange}
        placeholder="Animalname"></input>
      </div>
      <div className="form-item">
       <label className="create-label">Category</label>
       <Select
        isSearchable
        onChange={(e) => {
         setAnimalState({
          ...animalState,
          ...{ animalCategoryId: e.id },
         });
        }}
        options={props.category}
        getOptionLabel={(options) => options['name']}
        getOptionValue={(options) => options['id']}
       />
      </div>
      <div className="form-item">
       <label className="create-label">Birthday</label>
       <input name="birthday" onChange={handleChange} type={'date'} />
      </div>
      <div className="buttons ">
       <button disabled={disable} type="submit" className="btn btn-primary">
        Add Pet
       </button>
      </div>
     </form>
    </div>
   </div>
  </div>
 );
}
function mapStateToProps(state) {
 return {
  category: state.animalCategoryReducer,
  animal: state.animalReducer,
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  animalCategory: () => {
   dispatch(getAnimalCategory());
  },
  animalCreate: (animalState) => {
   dispatch(createAnimal(animalState));
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(AnimalCreate);
