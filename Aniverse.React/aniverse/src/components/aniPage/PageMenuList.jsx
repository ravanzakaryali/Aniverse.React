import React from 'react';
import { Link } from 'react-router-dom';

function PageMenuList() {
 return (
  <div className="page-menu">
   <ul>
    <li>
     <Link to="" className="active">
      Home
     </Link>
    </li>
    <li>
     <Link to="">Photos</Link>
    </li>
   </ul>
   <form className="follow-form">
    <button className="btn btn-primary">Follow</button>
   </form>
  </div>
 );
}

export default PageMenuList;
