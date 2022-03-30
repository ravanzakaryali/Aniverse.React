import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { RiPagesLine } from 'react-icons/ri';
import { MdOutlineEvent } from 'react-icons/md';
import { IoPawOutline } from 'react-icons/io5';

function Create() {
 return (
  <>
   <div className="setting-menu">
    <div className="title">Create</div>
    <div className="menu-list">
     <ul>
      <li>
       <Link to={`create/animal`}>
        <span className="icon">
         <IoPawOutline />
        </span>
        Animal
       </Link>
      </li>
      <li>
       <Link to={`create/story`}>
        <span className="icon">
         <BsFillJournalBookmarkFill />
        </span>
        Story
       </Link>
      </li>
      <li>
       <Link to={`create/post`}>
        <span className="icon">
         <FiEdit />
        </span>
        Post
       </Link>
      </li>
      <li>
       <Link to={`create/page`}>
        <span className="icon">
         <RiPagesLine />
        </span>
        Page
       </Link>
      </li>
     </ul>
    </div>
   </div>
  </>
 );
}
export default Create;
