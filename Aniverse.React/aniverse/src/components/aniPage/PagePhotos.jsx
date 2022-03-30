import LightGallery from 'lightgallery/react';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { getPagePhotos } from '../../redux/actions/pageAction';

function PagePhotos(props) {
 const { getPhotos } = props;
 const pagename = useParams().pagename;
 useEffect(() => {
  getPhotos(pagename, 1, 10);
 }, [getPhotos, pagename]);
 return (
  <>
   <div className="col-12">
    <div className="intro user-photos">
     <h3 className="intro-title">Photos</h3>
     <div className="photos-row row">
      {props.pagePhotos.data.length > 0 ? (
       <LightGallery speed={500}>
        {props.pagePhotos.data.map((photo, index) => (
         <a key={photo.id} href={photo.imageName} className="photo col-3">
          <img alt="" className="photo-img" src={photo.imageName} />
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

const mapStateToProps = (state) => {
 return {
  pagePhotos: state.pageGetPhotosReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  getPhotos: (pagename, page, size) => {
   dispatch(getPagePhotos(pagename, page, size));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PagePhotos);
