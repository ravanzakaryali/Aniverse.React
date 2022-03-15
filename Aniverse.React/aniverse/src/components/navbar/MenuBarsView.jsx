import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MenuBarsView(prosp) {
 const [menuBars, setMenuBars] = useState(false);

 return (
  <div className="navbar-menu-bars">
   <button
    onClick={() => {
     setMenuBars(!menuBars);
    }}
    className="btn menu-bars">
    <FontAwesomeIcon icon="fa-solid fa-bars" />
   </button>
   {menuBars ? (
    <div className="menu-bars-list">
     <ul>
      <li>
       <Link to="/">
        Notfication
        <FontAwesomeIcon icon="fa-solid fa-bell" />
       </Link>
      </li>
      <li>
       <Link to="/">
        Settings
        <FontAwesomeIcon icon="fa-solid fa-gear" />
       </Link>
      </li>
      <li>
       <Link to="/">
        Logout
        <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
       </Link>
      </li>
     </ul>
    </div>
   ) : (
    ''
   )}
  </div>
 );
}
export default MenuBarsView;
