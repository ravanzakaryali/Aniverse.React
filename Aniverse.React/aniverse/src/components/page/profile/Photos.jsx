import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { getOnlyUserPhotos } from '../../../redux/actions/userActions';
import LightGallery from 'lightgallery/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Photos(props) {
 const { getPhotos } = props;
 const username = useParams().username;
 useEffect(() => {
  getPhotos(username, 1, 100);
 }, [username]);
 return (
  <>
   <div className="col-12">
    <div className="intro user-photos">
     <h3 className="intro-title">Photos</h3>
     <div className="photos-row row">
      {props.photos.length > 0 ? (
       <LightGallery speed={500}>
        {props.photos.map((photo, index) => (
         <a key={photo.id} href={photo.imageName} className="photo col-3">
          <img alt="" className="photo-img" src={photo.imageName} />
          <button className="btn img-btn">
           <FontAwesomeIcon icon="fa-solid fa-pen" />
          </button>
         </a>
        ))}
       </LightGallery>
      ) : (
       ''
      )}
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
