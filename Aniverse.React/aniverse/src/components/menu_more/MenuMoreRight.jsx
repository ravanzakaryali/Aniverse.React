import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
       <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
       Post
      </button>
     </li>
     <li>
      <button className="btn">
       <FontAwesomeIcon icon="fa-file-image" />
       Story
      </button>
     </li>
    </ul>
    <ul>
     <li>
      <button className="btn">
       <FontAwesomeIcon icon="fa-solid fa-paw" />
       Animal
      </button>
     </li>
     <li>
      <button className="btn">
       <FontAwesomeIcon icon="fa-solid fa-window-maximize" />
       Page
      </button>
     </li>
     <li>
      <button className="btn">
       <FontAwesomeIcon icon="fa-solid fa-bullhorn" />
       Ad
      </button>
     </li>
    </ul>
   </div>
  </>
 );
}
export default MenuMoreRight;
