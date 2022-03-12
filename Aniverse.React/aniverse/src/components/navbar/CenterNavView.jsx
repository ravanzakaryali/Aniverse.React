import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function CenterNavView() {
 const location = useLocation();

 return (
  <ul className="center-nav-ul ul-flex">
   <li>
    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
     <i className="bi bi-house-fill"></i>
    </Link>
   </li>
   <li>
    <Link
     to="/explore"
     className={location.pathname === '/explore' ? 'active' : ''}>
     <i className="bi bi-compass-fill"></i>
    </Link>
   </li>
   <li>
    <Link
     to="/people"
     className={location.pathname.includes('/people') ? 'active' : ''}>
     <i className="bi bi-people-fill"></i>
    </Link>
   </li>
   <li>
    <Link
     to="/animals"
     className={location.pathname === '/animals' ? 'active' : ''}>
     <i className="fa-solid fa-paw"></i>
    </Link>
   </li>
  </ul>
 );
}
export default CenterNavView;
