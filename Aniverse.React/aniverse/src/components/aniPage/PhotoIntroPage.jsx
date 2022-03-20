import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getPagePhotos } from '../../redux/actions/pageAction';

function PhotoIntroPage(props) {
 console.log(useParams());
 const pagenameParams = useParams().pagename;
 const { getPagePhotosRequest } = props;
 useEffect(() => {
  getPagePhotosRequest(pagenameParams);
 }, [getPagePhotosRequest, pagenameParams]);
 console.log(props);
 return (
  <>
   <div className="photos-intro">
    <div className="photos-intro-title row">
     <div className="photos-title col-6">Photos</div>

     <div className="col-6 all-photos-btn">
      <Link to={`/page/${pagenameParams}/photos`}>See All Photo</Link>
     </div>
    </div>
    <div className="row">
     {props.pagePhotos.map((photo) => (
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
  getPagePhotosRequest: (pagename) => {
   dispatch(getPagePhotos(pagename));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIntroPage);
