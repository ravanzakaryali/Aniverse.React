import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserNavbar } from '../../redux/actions/userActions';
import StoryModal from '../story/StoryModal';
import Notfication from './Notfication';
import jwtDecode from 'jwt-decode';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

function Navbar(props) {
 const user = jwtDecode(localStorage.getItem('token'));
 const { getUser } = props;
 const [userrState, setUserState] = useState({});
 const { firstname, lastname, username, profilpicture } = props.userNavbar;

 const location = useLocation();

 useEffect(() => {
  setUserState(user.username);
  getUser(user.username);
 }, [userrState]);

 function dropDown(e) {
  let element = e.currentTarget.nextElementSibling;
  if (e.currentTarget.id === element.getAttribute('data-id')) {
   element.classList.toggle('d-none');
  }
 }

 return (
  <>
   <header className="navbar">
    <div className="container-fluid">
     <div className="row navbar-header">
      <div className="logo-search col-3">
       <div className="logo">
        <Link to="/">
         <span>Ani</span>verse
        </Link>
       </div>
       <div className="search">
        <input type="text" placeholder="Search Aniverse" />
       </div>
      </div>
      <nav className="center-nav col-6">
       <ul className="center-nav-ul ul-flex">
        <li>
         <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          <i className="bi bi-house-fill"></i>
         </Link>
        </li>
        <li>
         <Link
          to="/discover"
          className={location.pathname === '/discover' ? 'active' : ''}>
          <i className="bi bi-compass-fill"></i>
         </Link>
        </li>
        <li>
         <Link
          to="/people"
          className={location.pathname === '/people' ? 'active' : ''}>
          <i className="bi bi-people-fill"></i>
         </Link>
        </li>
        <li>
         <Link
          to="/animals"
          className={location.pathname === '/animals' ? 'active' : ''}>
          <i className="fa-solid fa-paw"></i>
         </Link>
        </li>
       </ul>
      </nav>
      <nav className="col-3">
       <div className="account-nav">
        <div className="col-4">
         <Link to={`user/${username}`} className="account-profile">
          <img
           className="user-img"
           src={profilpicture == null ? `../../img/user.png` : profilpicture}
           alt=""
          />
          <p className="user-name">{firstname}</p>
         </Link>
        </div>
        <ul className="right-nav col-7">
         <li className="right-nav-item">
          <a href="/">
           <i className="fa-brands fa-elementor"></i>
          </a>
         </li>
         <li className="right-nav-item">
          <a href="/">
           <i className="fa-solid fa-message"></i>
          </a>
         </li>
         <li className="right-nav-item">
          <a id="notf" onClick={(e) => dropDown(e)}>
           <i className="fa-solid fa-bell"></i>
           <i className="fa-solid fa-bell-on d-none"></i>
          </a>
          <Notfication />
         </li>
         <li className="right-nav-item">
          <a
           className="activeAccount"
           id="activeAccount"
           onClick={(e) => dropDown(e)}>
           <i className="fa-solid fa-caret-down"></i>
          </a>
          <div className="account d-none" data-id="activeAccount">
           <div className="account-header row">
            <Link className="row" to={`user/${username}`}>
             <div className="col-3 user-profile">
              <img
               className="user-img-xl"
               src="https://wallpaperaccess.com/full/2213424.jpg"
              />
             </div>
             <div className="account-profile col-8">
              {firstname} {lastname}
             </div>
            </Link>
           </div>
           <div className="account-body">
            <Link to="user/setting" className="setting">
             <div className="content">
              <div className="icon">
               <i className="fa-solid fa-gear"></i>
              </div>
              <p className="text">Setting</p>
             </div>
             <div className="left-icon">
              <i className="fa-solid fa-angle-right"></i>
             </div>
            </Link>
            <Link to="user/setting" className="setting bt">
             <div className="content">
              <div className="icon">
               <i className="fa-solid fa-right-from-bracket"></i>{' '}
              </div>
              <p className="text">Log out</p>
             </div>
            </Link>
           </div>
           <div className="account-footer">
            <Footer />
           </div>
          </div>
         </li>
        </ul>
       </div>
      </nav>
     </div>
    </div>
   </header>
   <StoryModal />
  </>
 );
}

const mapStateToProps = (state) => {
 return {
  userNavbar: state.userNavbarReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  getUser: (userState) => {
   dispatch(getUserNavbar(userState));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
