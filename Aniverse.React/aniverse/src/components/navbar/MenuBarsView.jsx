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
    <i className="fa-solid fa-bars"></i>
   </button>
   {menuBars ? (
    <div className="menu-bars-list">
     <ul>
      <li>
       <Link to="/">
        Notfication
        <i className="fa-solid fa-bell"></i>
       </Link>
      </li>
      <li>
       <Link to="/">
        Settings
        <i className="fa-solid fa-gear"></i>
       </Link>
      </li>
      <li>
       <Link to="/">
        Logout
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
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
