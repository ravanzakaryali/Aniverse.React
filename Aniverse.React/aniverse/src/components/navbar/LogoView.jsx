import React from 'react';
import { Link } from 'react-router-dom';
export default function LogoView() {
 return (
  <div className="logo">
   <Link to="/">
    <span>Ani</span>verse
   </Link>
  </div>
 );
}
