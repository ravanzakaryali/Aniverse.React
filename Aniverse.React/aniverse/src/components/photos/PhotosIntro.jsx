import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
 getOnlyUserPhotos,
 getUserPhotos,
} from '../../redux/actions/userActions';

function PhotosIntro(props) {
 const { getPhotos } = props;
 const [photosState, setPhotosState] = useState({});
 const username = useParams().username;
 useEffect(() => {
  setPhotosState(username);
  getPhotos(username, 1, 9);
 }, [getPhotos, photosState, username]);
 return (
  <div className="photos-intro">
   <div className="photos-intro-title row">
    <div className="photos-title col-6">Photos</div>

    <div className="col-6 all-photos-btn">
     <Link to={`/user/${username}/photos`}>See All Photo</Link>
    </div>
   </div>
   <div className="row">
    {props.userPhotos.map((photo) => (
     <div className="col-4" key={photo.id}>
      <div className="card-photos ">
       <img className="card-imgs" alt="users photos" src={photo.imageName} />
      </div>
     </div>
    ))}
   </div>
  </div>
 );
}
function mapStateToProps(state) {
 return {
  userPhotos: state.userOnlyPhotosReducer,
 };
}

const mapDispatchToProps = (dispatch) => {
 return {
  getPhotos: (username, page, size) => {
   dispatch(getOnlyUserPhotos(username, page, size));
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(PhotosIntro);
