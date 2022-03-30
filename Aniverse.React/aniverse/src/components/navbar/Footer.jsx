import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
 return (
  <>
   <div className="account-footer">
    <ul className="account-footer-ul">
     <li>
      <Link to="/privacy">Privacy</Link>
     </li>
     <li>
      <Link to="/terms">Terms</Link>
     </li>
     <li>Aniverse Ⓒ 2022</li>
    </ul>
   </div>
  </>
 );
}
