import React from 'react';
import ProfilePicture from './img/default_profile.jpg';

function ProfilePictureStyle(props) {
 const { profilPicture, alt, className } = props;
 return (
  <div>
   <img
    alt={alt}
    className={className}
    src={profilPicture == null ? ProfilePicture : profilPicture}
   />
  </div>
 );
}

export default ProfilePictureStyle;
