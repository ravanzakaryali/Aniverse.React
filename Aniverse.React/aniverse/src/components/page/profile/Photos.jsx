import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { getOnlyUserPhotos } from '../../../redux/actions/userActions';

function Photos(props) {
 const { getPhotos } = props;
 const username = useParams().username;
 useEffect(() => {
  getPhotos(username, 1, 100);
 }, [username]);
 console.log(props);
 return (
  <>
   <div className="col-12">
    <div className="intro user-photos">
     <h3 className="intro-title">Photos</h3>
     <div className="photos-row row">
      {props.photos.map((photo) => (
       <>
        <div className="col-3">
         <img
          alt="user photos"
          className="photo-img"
          src={`${photo.imageName}`}
         />
        </div>
       </>
      ))}
     </div>
    </div>
   </div>
  </>
 );
}

function mapStateToProps(state) {
 return {
  photos: state.userPhotosReducer,
 };
}
function mapDispatchToProps(dispatch) {
 return {
  getPhotos: (username, page, size) => {
   dispatch(getOnlyUserPhotos(username, page, size));
  },
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
