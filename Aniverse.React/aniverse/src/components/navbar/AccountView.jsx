import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function AccountView(props) {
 const { firstname, username, profilPicture } = props.userLogin;
 console.log(props);
 return (
  <Link to={`user/${username}`} className="account-profile">
   <img
    className="user-img"
    src={profilPicture == null ? `../../img/user.png` : `${profilPicture}`}
    alt=""
   />
   <p className="user-name">{firstname}</p>
  </Link>
 );
}

const mapStateToProps = (state) => {
 return {
  userLogin: state.userLoginReducer,
 };
};

export default connect(mapStateToProps)(AccountView);
