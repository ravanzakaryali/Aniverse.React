import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

function Recycle(props) {
 return (
  <>
   <div className="archive">
    <div className="archive-title">Recycle</div>
    <div className="archive-list">
     <ul className="archive-list-menu">
      <li>
       <Link to=" ">Post</Link>
      </li>
      <li>
       <Link to="story">Story</Link>
      </li>
     </ul>
    </div>
   </div>
   <div className="col-12">
    <Outlet />
   </div>
  </>
 );
}
export default Recycle;
