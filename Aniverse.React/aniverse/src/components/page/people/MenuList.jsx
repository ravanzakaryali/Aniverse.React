import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function MenuList() {
 const location = useLocation();
 return (
  <div>
   <div className="title">
    <h3>People</h3>
   </div>
   <ul className="menu-list">
    <li>
     <Link
      to="/people"
      className={location.pathname === '/people' ? 'active' : ''}>
      <i className="fa-solid fa-users"></i>
      All people
     </Link>
    </li>
    <li>
     <Link
      to="friends"
      className={location.pathname === '/people/friends' ? 'active' : ''}>
      <i className="fa-solid fa-user-group"></i>
      Friends
     </Link>
    </li>
    <li>
     <Link
      to="request"
      className={location.pathname === '/people/request' ? 'active' : ''}>
      <i className="fa-solid fa-user-check"></i>
      Friends request
     </Link>
    </li>
    <li>
     <Link
      to="block"
      className={location.pathname === '/people/block' ? 'active' : ''}>
      <i className="fa-solid fa-user-lock"></i>
      Block users
     </Link>
    </li>
   </ul>
  </div>
 );
}

export default MenuList;
