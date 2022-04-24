import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';

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
      <FontAwesomeIcon className="icon" icon="fa-solid fa-users" />
      All people
      <FontAwesomeIcon
       className="icon-right"
       icon="fa-solid fa-chevron-right"
      />
     </Link>
    </li>
    <li>
     <Link
      to="friends"
      className={location.pathname === '/people/friends' ? 'active' : ''}>
      <FontAwesomeIcon className="icon" icon="fa-solid fa-user-group" />
      Friends
      <FontAwesomeIcon
       className="icon-right"
       icon="fa-solid fa-chevron-right"
      />
     </Link>
    </li>
    <li>
     <Link
      to="request"
      className={location.pathname === '/people/request' ? 'active' : ''}>
      <FontAwesomeIcon icon="fa-solid fa-user-plus" className="icon" />
      Friends request
      <FontAwesomeIcon
       className="icon-right"
       icon="fa-solid fa-chevron-right"
      />
     </Link>
    </li>
    <li>
     <Link
      to="block"
      className={location.pathname === '/people/block' ? 'active' : ''}>
      <FontAwesomeIcon className="icon" icon="fa-solid fa-user-lock" />
      Block users
      <FontAwesomeIcon
       className="icon-right"
       icon="fa-solid fa-chevron-right"
      />
     </Link>
    </li>
   </ul>
  </div>
 );
}

export default MenuList;
