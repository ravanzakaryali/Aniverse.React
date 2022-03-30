import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

function SettingItem(props) {
 const { title } = props;
 return (
  <>
   <div className="archive">
    <div className="archive-title">{title}</div>
    <div className="archive-list">
     <ul className="archive-list-menu">
      <li>
       <Link to=" ">Post</Link>
      </li>

      {window.location.pathname.includes('save') ? (
       <li>
        <Link to="shop">Shop</Link>
       </li>
      ) : (
       <li>
        <Link to="story">Story</Link>
       </li>
      )}
     </ul>
    </div>
   </div>
   <Outlet />
  </>
 );
}
export default SettingItem;
