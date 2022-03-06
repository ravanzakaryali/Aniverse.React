import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
 return (
  <>
   <ul className="account-footer-ul">
    <li>
     <Link to="/privacy">Privacy</Link>
    </li>
    <li>
     <Link to="/terms">Terms</Link>
    </li>
    <li>
     <Link to="/advertising">Advertising</Link>
    </li>
    <li>
     <Link to="/aniverse">Aniverse Ⓒ 2022</Link>
    </li>
   </ul>
  </>
 );
}
