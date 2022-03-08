import React from 'react';
import { useLocation } from 'react-router';
import AllPeopleButton from './AllPeopleButton';
import BlockUsersButton from './BlockUsersButton';
import FriendRequestButton from './FriendRequestButton';
import FriendsButton from './FriendsButton';

function UserItemButtons() {
 const location = useLocation();
 return (
  <>
   {location.pathname === '/people' ? <AllPeopleButton /> : ''}
   {location.pathname === '/people/friends' ? <FriendsButton /> : ''}
   {location.pathname === '/people/request' ? <FriendRequestButton /> : ''}
   {location.pathname === '/people/block' ? <BlockUsersButton /> : ''}
  </>
 );
}
export default UserItemButtons;
