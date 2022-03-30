import React from 'react';
import ProfilePicture from './img/AnimalProfile.jpg';

function AnimalPPStyle(props) {
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

export default AnimalPPStyle;
