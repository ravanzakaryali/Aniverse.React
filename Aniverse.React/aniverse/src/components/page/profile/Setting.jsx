import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Setting() {
 return (
  <>
   <div className=" col-12 col-md-5">
    <div className="setting-menu">
     <div className="title">Setting</div>
     <div className="menu-list">
      <ul>
       <li>
        <Link to={`archive`}>
         <span className="icon">
          <FontAwesomeIcon icon="fa-solid fa-box-archive" />
         </span>
         Archive
        </Link>
       </li>
       <li>
        <Link to={`recycle`}>
         <span className="icon">
          <FontAwesomeIcon icon="fa-solid fa-trash" />{' '}
         </span>
         Recycle bin
        </Link>
       </li>
      </ul>
     </div>
    </div>
   </div>
   <div className="col-12 col-md-7">
    <Outlet />
   </div>
  </>
 );
}
export default Setting;
