import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
function PageAbout(props) {
 const { pageFollow, about, website, id, userId } = props.page.data;
 const userLoginId = JSON.parse(localStorage.getItem('loginUser')).id;

 return (
  <>
   <div className="intro">
    <div className="intro-title">
     About
     {userLoginId === userId ? (
      <button
       className="btn btn-opacity-primary"
       data-bs-toggle="modal"
       data-bs-target="#editPage">
       Edit
      </button>
     ) : (
      ' '
     )}
    </div>
    <ul className="page-about-list">
     <li>
      <FontAwesomeIcon className="icon col-1" icon="fa-solid fa-circle-info" />
      <p className="col-11">{about}</p>
     </li>
     <li>
      <FontAwesomeIcon className="icon" icon="fa-solid fa-thumbs-up" />
      {pageFollow ? pageFollow.length : 0} followers people
     </li>
     <li>
      <FontAwesomeIcon className="icon" icon="fa-solid fa-link" />
      <Link to={`//${website}`}>{website}</Link>
     </li>
    </ul>
   </div>
  </>
 );
}

const mapStateToProps = (state) => {
 return {
  page: state.pageReducer,
 };
};
export default connect(mapStateToProps)(PageAbout);
