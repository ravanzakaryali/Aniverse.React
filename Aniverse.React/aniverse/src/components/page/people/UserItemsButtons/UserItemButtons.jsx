import React from 'react';
import { useLocation } from 'react-router';
import AllPeopleButton from './AllPeopleButton';
import BlockUsersButton from './BlockFriendButton';
import FriendRequestButton from './FriendRequestButton';
import UnFriendButton from './UnFriendButton';

function UserItemButtons(props) {
 const location = useLocation();
 return (
  <>
   {location.pathname === '/people' ? (
    <AllPeopleButton userId={props.userId} />
   ) : (
    ''
   )}
   {location.pathname === '/people/friends' ? (
    <UnFriendButton userId={props.userId} />
   ) : (
    ''
   )}
   {location.pathname === '/people/request' ? (
    <FriendRequestButton userId={props.userId} />
   ) : (
    ''
   )}
   {location.pathname === '/people/block' ? (
    <BlockUsersButton userId={props.userId} />
   ) : (
    ''
   )}
  </>
 );
}
export default UserItemButtons;
