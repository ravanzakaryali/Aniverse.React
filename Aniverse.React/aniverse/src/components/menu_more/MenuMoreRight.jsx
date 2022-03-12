import React from 'react';
import { Link } from 'react-router-dom';

function MenuMoreRight() {
 return (
  <>
   <div className="right-menu-title">
    <h4>Create</h4>
   </div>
   <div className="right-menu-items">
    <ul className="first">
     <li>
      <button className="btn">
       <i className="fa-solid fa-pen-to-square"></i>
       Post cerate
      </button>
     </li>
     <li>
      <button className="btn">
       <i className="fa-solid fa-file-image"></i>
       Story
      </button>
     </li>
    </ul>
    <ul>
     <li>
      <button className="btn">
       <i className="fa-solid fa-paw"></i>
       Animal
      </button>
     </li>
     <li>
      <button className="btn">
       <i className="fa-solid fa-window-maximize"></i>
       Page
      </button>
     </li>
     <li>
      <button className="btn">
       <i className="fa-solid fa-bullhorn"></i>
       Ad
      </button>
     </li>
    </ul>
   </div>
  </>
 );
}
export default MenuMoreRight;
