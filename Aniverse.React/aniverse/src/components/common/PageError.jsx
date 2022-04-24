import React from 'react';
import { Link } from 'react-router-dom';
import { FcBrokenLink } from 'react-icons/fc';

const PageError = () => {
 return (
  <div className="error-page">
   <div className="content col-11 col-sm-8 col-md-6 ">
    <p className="icon">
     <FcBrokenLink />
    </p>
    <p className="page-head">This page isn't available</p>
    <p className="page-body">
     The link may be broken, or the page may have been removed. Check to see if
     the link you're trying to open is correct.
    </p>
    <Link className="go-back" to={'/'}>
     Go back
    </Link>
   </div>
  </div>
 );
};

export default PageError;
