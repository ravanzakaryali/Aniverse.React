import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { changeBio } from '../../../redux/actions/userActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Intro(props) {
 const { bioChange } = props;
 const [active, setStateActive] = useState(true);
 const [bioState, bioSetState] = useState();
 const { address, birthday, gender, bio } = props.user.data;
 return (
  <div className="intro col-12">
   <h3 className="intro-title">Intro</h3>
   <div className="col-12">
    {active ? <p className="bio-content">{bio}</p> : ''}
    {active ? (
     props.user.data.id === props.userAuth.id ? (
      <>
       <button
        onClick={(e) => {
         setStateActive(!active);
        }}
        className="btn btn-opacity-primary">
        Edit Bio
       </button>
      </>
     ) : (
      ''
     )
    ) : (
     <>
      <form
       className="edit-form"
       onSubmit={(e) => {
        e.preventDefault();
        const bioPatch = [
         {
          op: 'replace',
          path: '/bio',
          value: `${bioState}`,
         },
        ];
        bioChange(bioPatch);
        setStateActive(!active);
       }}>
       <textarea
        onChange={(e) => {
         bioSetState(e.currentTarget.value);
        }}
        className="textarea-bio"
        placeholder="Add a bio"
        defaultValue={bio}></textarea>
       <div className="buttons">
        <button
         className="btn btn-light"
         type="button"
         onClick={(e) => {
          setStateActive(!active);
         }}>
         Cancel
        </button>
        <button
         disabled={props.user.bioLoading}
         className="btn btn-primary"
         onClick={() => {
          props.user.bio = bioState;
         }}
         type="submit">
         Save
        </button>
       </div>
      </form>
     </>
    )}
   </div>
   <div className="col-12">
    <ul className="from-address">
     <li>
      <FontAwesomeIcon icon="fa-solid fa-location-dot" className="icon" />
      From
      <Link to={`page/${address}`}>{address}</Link>
     </li>
     <li>
      <FontAwesomeIcon icon="fa-solid fa-cake-candles" className="icon" />
      Birthday
      <Moment format="MMM DD YYYY">{Date.parse(birthday)}</Moment>
     </li>
     <li>
      {gender === 'Male' ? (
       <FontAwesomeIcon icon="fa-solid fa-person" className="icon" />
      ) : (
       <FontAwesomeIcon icon="fa-solid fa-person-dress" className="icon" />
      )}
      Gender
      <p>{gender}</p>
     </li>
    </ul>
   </div>
  </div>
 );
}

function mapStateToProps(state) {
 return {
  user: state.userReducer,
  userAuth: state.userLoginReducer,
 };
}
function mapDispatchToProps(dispatch) {
 return {
  bioChange: (bioState) => {
   dispatch(changeBio(bioState));
  },
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
