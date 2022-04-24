import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Auth(props) {
 return (
  <div className="auth">
   <div className="container">
    <div className="row auth-row">
     <div className="auth-logo col-6">
      <div className="auth-l">
       <Link to="login">
        <span>Ani</span>verse
       </Link>
      </div>
     </div>
     <div className="col-6 auth-wrap">
      <Outlet />
     </div>
     <span className="bg-img"></span>
    </div>
   </div>
  </div>
 );
}
export default Auth;
