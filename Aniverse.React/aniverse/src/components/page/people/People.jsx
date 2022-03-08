import React from 'react';
import Sponsored from '../../Sponsored/Sponsored';
import { Outlet } from 'react-router';
import MenuList from './MenuList';
function People() {
 return (
  <div className="row people-row">
   <div className="people-page-menu col-3">
    <MenuList />
   </div>
   <div className="people-center col-6">
    <Outlet />
   </div>
   <div className="people-right col-3">
    <Sponsored />
   </div>
  </div>
 );
}

export default People;
