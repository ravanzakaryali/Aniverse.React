import React from 'react';
import DefaultPageProfile from './img/page_default.png';

function ProfilePPStyle(prop) {
 const { name, profilPicture } = prop;
 return (
  <img alt={name} src={profilPicture ? profilPicture : DefaultPageProfile} />
 );
}

export default ProfilePPStyle;
