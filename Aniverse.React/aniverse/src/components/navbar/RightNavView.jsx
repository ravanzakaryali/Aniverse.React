import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import MenuMore from '../menu_more/MenuMore';
import Footer from './Footer';
import Notfication from './Notfication';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdAppRegistration } from 'react-icons/md';
import { logOut } from '../../redux/actions/authAction';
import ProfilePictureStyle from '../user/ProfilePictureStyle';

function RightNavView(props) {
 const navigate = useNavigate();
 const [activeNav, setActiveNav] = useState(true);
 const { logOutRequest } = props;
 const { firstname, lastname, username, profilPicture } = props.userLogin;
 const ActiveNav = () => {
  setActiveNav(!activeNav);
 };
 useEffect(() => {
  ActiveNav();
 }, []);
 return (
  <>
   <ul className="right-nav ">
    <li className="right-nav-item">
     <button className="btn activeAccount" onClick={ActiveNav}>
      <FontAwesomeIcon icon="fa-caret-down" />
     </button>
     {activeNav ? (
      <div className="account">
       <div className="account-header row">
        <Link className="row" to={`user/${username}`}>
         <div className="col-3 user-profile">
          <ProfilePictureStyle
           alt="Login user"
           className={'user-img-xl'}
           profilPicture={profilPicture}
          />
         </div>
         <div className="account-profile col-8">
          {firstname} {lastname}
         </div>
        </Link>
       </div>
       <div className="account-body">
        <Link to={`/user/${username}/setting/archive`} className="setting">
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
        <div className="setting">
         <div className="content">
          <div className="icon">
           <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
          </div>
          <button
           className="btn text"
           onClick={() => {
            logOutRequest();
            navigate('/authenticate/login');
           }}>
           Log out
          </button>
         </div>
        </div>
       </div>
       <Footer />
      </div>
     ) : (
      ''
     )}
    </li>
   </ul>
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  userLogin: state.userLoginReducer,
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
