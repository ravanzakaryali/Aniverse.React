import React, { useState } from 'react';

function StoryController(props) {
 const [activeMenu, setActiveMenu] = useState(false);
 return (
  <>
   <button
    onClick={() => {
     setActiveMenu(!activeMenu);
    }}
    className="btn btn-story">
    <i class="fa-solid fa-ellipsis-vertical"></i>
   </button>
   {activeMenu ? (
    <div className="story-menu">
     <ul>
      <li>
       <button className="btn">
        Archive
        <i class="fa-solid fa-box-open"></i>
       </button>
      </li>
      <li>
       <button className="btn">
        Delete
        <i class="fa-solid fa-trash"></i>
       </button>
      </li>
     </ul>
    </div>
   ) : (
    ''
   )}
  </>
 );
}
export default StoryController;
