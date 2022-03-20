import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
function PageAbout(props) {
 const { followCount, about, website } = props.page;
 console.log(props);
 return (
  <div className="page-about">
   <div className="page-about-title">
    <h3>About</h3>
   </div>
   <ul className="page-about-list">
    <li>
     <FontAwesomeIcon className="icon col-1" icon="fa-solid fa-circle-info" />
     <p className="col-11">{about}</p>
    </li>
    <li>
     <FontAwesomeIcon className="icon" icon="fa-solid fa-thumbs-up" />
     {followCount} followers people
    </li>
    <li>
     <FontAwesomeIcon className="icon" icon="fa-solid fa-link" />
     <Link to={`${website}`}>{website}</Link>
    </li>
   </ul>
  </div>
 );
}

const mapStateToProps = (state) => {
 return {
  page: state.pageGetReducer,
 };
};

export default connect(mapStateToProps)(PageAbout);
