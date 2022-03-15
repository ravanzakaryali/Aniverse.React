import React, { useState, useEffect } from 'react';
import UserRequest from '../user/UserRequest';
import { connect } from 'react-redux';
import { getFriendRequest } from '../../redux/actions/userActions';
import Sponsored from '../Sponsored/Sponsored';

function SidebarRight() {
 return (
  <>
   <UserRequest />
   <Sponsored />
  </>
 );
}

export default SidebarRight;
