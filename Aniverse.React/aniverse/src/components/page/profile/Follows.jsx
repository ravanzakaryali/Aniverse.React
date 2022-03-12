import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getUserFollowsAnimal } from '../../../redux/actions/userActions';

function Follows(props) {
 const { follows } = props;
 const username = useParams().username;
 useEffect(() => {
  follows(username);
 }, []);
 return (
  <div className="">
   <div className="intro follow-user">
    <h3 className="intro-title">Follows</h3>
    <div className="row follow-row">
     {props.animalFollows.map((animal) => (
      <Link
       to={`/animal/${animal.animalname}`}
       className="col-2"
       key={animal.id}>
       <div className="animal-img">
        <img
         alt="Animal profile"
         className="profile-img"
         src={
          animal.profilePicture == null
           ? `../../img/animal.jpg`
           : `${animal.profilePicture}`
         }
        />
       </div>
       <div className="animal-content">
        <h4>{animal.name}</h4>
       </div>
      </Link>
     ))}
    </div>
   </div>
  </div>
 );
}
const mapStateToProps = (state) => {
 return {
  userAuth: state.userLoginReducer,
  animalFollows: state.animalFollowsReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  follows: (username) => {
   dispatch(getUserFollowsAnimal(username));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Follows);
