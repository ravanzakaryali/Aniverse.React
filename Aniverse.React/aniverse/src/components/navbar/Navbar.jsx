import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLoginUser } from '../../redux/actions/userActions';
import { useWindowSize } from '@react-hook/window-size';
import AccountView from './AccountView';
import MenuBarsView from './MenuBarsView';
import RightNavView from './RightNavView';
import LogoView from './LogoView';
import CenterNavView from './CenterNavView';
import { useLocation, useNavigate } from 'react-router';
import SearchInput from './SearchInput';
import PageCreateModal from '../aniPage/PageCreateModal';

function Navbar(props) {
 const navigate = useNavigate();
 const token = localStorage.getItem('token');
 const location = useLocation();
 const [width] = useWindowSize();
 const { getUser } = props;

 useEffect(() => {
  if (token === null) return navigate('/authenticate/login');
  if (!location.pathname.includes('/authenticate')) {
   getUser();
  }
 }, []);

 return (
  <>
   {!location.pathname.includes('/auth') ? (
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
         <SearchInput />
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
   ) : (
    ''
   )}
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
  getUser: () => {
   dispatch(getLoginUser());
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
