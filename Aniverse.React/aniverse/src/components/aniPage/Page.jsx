import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { getPage } from '../../redux/actions/pageAction';
import HomePage from './HomePage';
import DefaultPageProfile from './img/page_default.png';
import PageMenuList from './PageMenuList';

function Page(props) {
 const paramsPagename = useParams().pagename;
 const { getPageRequest } = props;
 const {
  name,
  pagename,
  followCount,
  about,
  category,
  isOfficial,
  profilePicture,
  coverPicture,
 } = props.page;
 useEffect(() => {
  getPageRequest(paramsPagename);
 }, [getPageRequest, paramsPagename]);
 console.log(props);
 return (
  <div className="container">
   <div className="ani_page">
    <div className="cover_picture">
     {coverPicture ? (
      <img alt={name} src={coverPicture} />
     ) : (
      <div className="default_bg_style"></div>
     )}
     <form className="btn-parent">
      <button className="btn btn_cover">
       <FontAwesomeIcon icon="fa-solid fa-camera" />
      </button>
     </form>
    </div>
    <div className="page_profile">
     <div className="profile-title">
      <div className="page-profile-img">
       <img
        alt={name}
        src={profilePicture ? profilePicture : DefaultPageProfile}
       />
      </div>
      <div className="page-profile-contetn">
       <p className="name">
        {name}
        {isOfficial ? (
         <>
          <span className="circle">
           <FontAwesomeIcon icon="fa-solid fa-circle-check" />
          </span>
         </>
        ) : (
         ''
        )}{' '}
       </p>
       <p className="follower"> {category}</p>
      </div>
     </div>
     <PageMenuList />
    </div>
   </div>
   <div className="row ani-page-home">
    <HomePage />
   </div>
  </div>
 );
}
const mapStateToProps = (state) => {
 return {
  page: state.pageGetReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  getPageRequest: (pagename) => {
   dispatch(getPage(pagename));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
