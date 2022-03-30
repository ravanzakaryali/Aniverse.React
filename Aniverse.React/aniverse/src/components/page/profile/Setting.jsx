import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ArchiveIntro from './ArchiveIntro';
import Create from './Create';
import Intro from './Intro';

function Setting() {
 return (
  <>
   <div className="col-12 col-md-5 setting-fixed">
    <ArchiveIntro />
    <Create />
   </div>
   <div className="col-12 col-md-7 setting-row">
    <Outlet />
   </div>
  </>
 );
}
export default Setting;
