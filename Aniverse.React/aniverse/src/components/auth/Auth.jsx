import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Navigate, Route, Link, Outlet } from 'react-router-dom';
import { authLogin } from '../../redux/actions/authAction';
import Login from './Login';
import Register from './Register';

function Auth(props) {
 // const auth = useSelector((state) => state.authReducer);
 // if (auth.username) return <Navigate to="/" />;
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
