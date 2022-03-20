import React, { useState, useEffect } from 'react';
import UserRequest from '../user/UserRequest';
import { connect } from 'react-redux';
import { getFriendRequest } from '../../redux/actions/userActions';
import Sponsored from '../Sponsored/Sponsored';
import PageIntro from '../aniPage/PageIntro';

function SidebarRight() {
 return (
  <>
   <UserRequest />
   {/* <PageIntro /> */}
   <Sponsored />
  </>
 );
}

export default SidebarRight;
