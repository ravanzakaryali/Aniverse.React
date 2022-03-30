import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Intro from './Intro';
import { BsBookmarkCheck } from 'react-icons/bs';
import { RiInboxArchiveLine } from 'react-icons/ri';
import { FiTrash } from 'react-icons/fi';

function ArchiveIntro() {
 return (
  <>
   <div className="setting-menu">
    <div className="title">Archive</div>
    <div className="menu-list">
     <ul>
      <li>
       <Link to={`archive`}>
        <span className="icon">
         <RiInboxArchiveLine icon="fa-solid fa-box-archive" />
        </span>
        Archive
       </Link>
      </li>
      <li>
       <Link to={`recycle`}>
        <span className="icon">
         <FiTrash icon="fa-solid fa-trash" />
        </span>
        Recycle bin
       </Link>
      </li>
      <li>
       <Link to={`save`}>
        <span className="icon">
         <BsBookmarkCheck />
        </span>
        Save
       </Link>
      </li>
     </ul>
    </div>
   </div>
  </>
 );
}
export default ArchiveIntro;
