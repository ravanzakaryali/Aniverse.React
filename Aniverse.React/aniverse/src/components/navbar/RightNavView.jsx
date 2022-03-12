import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MenuMore from '../menu_more/MenuMore';
import Footer from './Footer';
import Notfication from './Notfication';

function RightNavView(props) {
 const { firstname, lastname, username, profilPicture } = props.userNavbar;
 function dropDown(e) {
  let element = e.currentTarget.nextElementSibling;
  if (e.currentTarget.id === element.getAttribute('data-id')) {
   element.classList.toggle('d-none');
  }
 }
 return (
  <>
   <ul className="right-nav col-7">
    <li className="right-nav-item">
     <a id="menu_more" onClick={(e) => dropDown(e)}>
      <i className="fa-brands fa-elementor"></i>
     </a>
     <div className="d-none" data-id="menu_more">
      <MenuMore />
     </div>
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
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  userNavbar: state.userNavbarReducer,
 };
};

export default connect(mapStateToProps)(RightNavView);
