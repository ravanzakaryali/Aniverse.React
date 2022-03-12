import React from 'react';
import Sponsored from '../../Sponsored/Sponsored';
import { Outlet } from 'react-router';
import { useWindowSize } from '@react-hook/window-size';
import MenuList from './MenuList';

function People() {
 const [width] = useWindowSize();
 return (
  <div className="row people-row">
   {width > 768 ? (
    <div className="people-page-menu col-3">
     <MenuList />
    </div>
   ) : (
    ''
   )}
   <div className="people-center col-12 col-md-6">
    <Outlet />
   </div>
   {width > 768 ? (
    <div className="people-right col-3">
     <Sponsored />
    </div>
   ) : (
    ''
   )}
  </div>
 );
}

export default People;
