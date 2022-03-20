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
    <AllPeopleButton setComRender={props.setComRender} userId={props.userId} />
   ) : (
    ''
   )}
   {location.pathname === '/people/friends' ? (
    <UnFriendButton setComRender={props.setComRender} userId={props.userId} />
   ) : (
    ''
   )}
   {location.pathname === '/people/request' ? (
    <FriendRequestButton
     setComRender={props.setComRender}
     userId={props.userId}
    />
   ) : (
    ''
   )}
   {location.pathname === '/people/block' ? (
    <BlockUsersButton setComRender={props.setComRender} userId={props.userId} />
   ) : (
    ''
   )}
  </>
 );
}
export default UserItemButtons;
