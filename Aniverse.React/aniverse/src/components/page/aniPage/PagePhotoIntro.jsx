import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPagePhotos } from '../../../redux/actions/pageAction';

function PagePhotoIntro(props) {
 const { getPhotos } = props;
 const pagename = useParams().pagename;
 useEffect(() => {
  getPhotos(pagename, 1, 9);
 }, [getPhotos, pagename]);
 return (
  <>
   <div className="photos-intro intro">
    <div className="photos-intro-title row">
     <div className="intro-title col-6">Photos</div>

     <div className="col-6 all-photos-btn">
      <Link to={`/page/${pagename}/photos`}>See All Photo</Link>
     </div>
    </div>
    <div className="row">
     {props.pagePhotos.data.map((photo) => (
      <div className="col-4" key={photo.id}>
       <div className="card-photos ">
        <img className="card-imgs" alt="users photos" src={photo.imageName} />
       </div>
      </div>
     ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(PagePhotoIntro);
