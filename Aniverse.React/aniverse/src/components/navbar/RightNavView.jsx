import React from 'react';
import { connect } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import MenuMore from '../menu_more/MenuMore';
import Footer from './Footer';
import Notfication from './Notfication';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdAppRegistration } from 'react-icons/md';
import { logOut } from '../../redux/actions/authAction';

function RightNavView(props) {
 const navigate = useNavigate();
 const { logOutRequest } = props;
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
    {/* <li className="right-nav-item">
     <a id="menu_more" onClick={(e) => dropDown(e)}>
      <MdAppRegistration />
     </a>
     <div className="d-none" data-id="menu_more">
      <MenuMore />
     </div>
    </li> */}
    {/* <li className="right-nav-item">
     <a id="notf" onClick={(e) => dropDown(e)}>
      <FontAwesomeIcon icon="fa-solid fa-bell" />
     </a>
     <Notfication />
    </li> */}
    <li className="right-nav-item">
     <a
      className="activeAccount"
      id="activeAccount"
      onClick={(e) => dropDown(e)}>
      <FontAwesomeIcon icon="fa-caret-down" />
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
          <FontAwesomeIcon icon="fa-solid fa-gear" />
         </div>
         <p className="text">Setting</p>
        </div>
        <div className="left-icon">
         <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </div>
       </Link>
       <div className="content">
        <div className="icon">
         <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
        </div>
        <button
         className="text"
         onClick={() => {
          logOutRequest();
          navigate('/authenticate/login');
         }}>
         Log out
        </button>
       </div>
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

const mapDispatchToProps = (dispatch) => {
 return {
  logOutRequest: () => {
   dispatch(logOut());
  },
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(RightNavView);
