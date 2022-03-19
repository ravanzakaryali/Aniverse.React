import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { GiDogHouse } from 'react-icons/gi';
import { MdExplore } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';
import { FaPaw } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';

function CenterNavView(props) {
 const location = useLocation();
 console.log(props);
 return (
  <ul className="center-nav-ul ul-flex">
   <li>
    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
     <FaHome />
    </Link>
   </li>
   <li>
    <Link
     to="/explore"
     className={location.pathname === '/explore' ? 'active' : ''}>
     <MdExplore />
    </Link>
   </li>
   <li>
    <Link
     to="/people"
     className={location.pathname.includes('/people') ? 'active' : ''}>
     <BsPeopleFill />
    </Link>
   </li>
   <li>
    <Link
     to="/animals"
     className={location.pathname.includes('/animals') ? 'active' : ''}>
     <FaPaw />
    </Link>
   </li>
  </ul>
 );
}
export default CenterNavView;
