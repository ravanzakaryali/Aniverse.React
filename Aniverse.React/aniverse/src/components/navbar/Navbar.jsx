import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserNavbar } from '../../redux/actions/userActions';
import {
 useWindowSize,
 useWindowWidth,
 useWindowHeight,
} from '@react-hook/window-size';
import AccountView from './AccountView';
import MenuBarsView from './MenuBarsView';
import RightNavView from './RightNavView';
import LogoView from './LogoView';
import SearchView from './SearchView';
import CenterNavView from './CenterNavView';

function Navbar(props) {
 const [width] = useWindowSize();

 const { getUser } = props;

 const userLogin = JSON.parse(localStorage.getItem('loginUser'));

 useEffect(() => {
  getUser(userLogin.username);
 }, []);

 return (
  <>
   {width < 769 ? (
    <header className="navbar" style={{ bottom: 0 }}>
     <div className="container-fluid">
      <div className="row navbar-header">
       <nav className="center-nav col-12">
        <CenterNavView />
       </nav>
      </div>
     </div>
    </header>
   ) : (
    ''
   )}
   <header className="navbar" style={{ top: 0 }}>
    <div className="container-fluid">
     <div className="row navbar-header">
      <div className="logo-search col-6 col-md-3">
       <LogoView />
       <SearchView />
      </div>

      {width > 769 ? (
       <nav className="center-nav col-6">
        <CenterNavView />
       </nav>
      ) : (
       ''
      )}
      <nav className="col-4 col-md-3">
       <div className="account-nav">
        <div className="col-4">{width >= 992 ? <AccountView /> : ''}</div>
        {width >= 1200 ? <RightNavView /> : <MenuBarsView />}
       </div>
      </nav>
     </div>
    </div>
   </header>
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
