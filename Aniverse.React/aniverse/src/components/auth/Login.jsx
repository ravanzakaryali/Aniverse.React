import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { authLogin } from '../../redux/actions/authAction';

function Login(props) {
 const { login, loginError } = props;
 const [loginState, setLoginState] = useState({});
 const [isSubmit, setIsSubmit] = useState(false);
 const [formErrors, setFormErrors] = useState({});
 const [disable, setDisable] = useState(true);

 const navigate = useNavigate();
 const handleChange = (e) => {
  const { name, value } = e.target;
  setLoginState({ ...loginState, ...{ [name]: value } });
 };

 const handleSubmit = (e) => {
  setFormErrors(validate(loginState));
  e.preventDefault();
  setIsSubmit(true);
 };
 const hangleKeyPress = (e) => {
  if (loginState) {
   if (loginState.username && loginState.password) {
    setDisable(false);
   } else {
    setDisable(true);
   }
  }
 };
 const validate = (values) => {
  const errors = {};
  if (!values.username) {
   errors.username = 'Username is required';
  }
  if (!values.password) {
   errors.password = 'Password is required';
  }
  return errors;
 };
 useEffect(() => {
  if (localStorage.getItem('token') !== null) return navigate('/');
  if (Object.keys(formErrors) && isSubmit) {
   login(loginState);
  }
 }, [formErrors, isSubmit, navigate, localStorage.getItem('token')]);
 const auth = useSelector((state) => state.authReducer);
 return (
  <form className="form-horizontal" onSubmit={handleSubmit}>
   <h1 className="auth-title">Login</h1>
   <div className="form-auth">
    {loginError.response ? (
     loginError.response.status === 404 ||
     loginError.response.status === 401 ? (
      <span className="validation">Email or Password is wrong</span>
     ) : (
      ''
     )
    ) : (
     ''
    )}

    <input
     name="username"
     onChange={handleChange}
     onKeyUp={hangleKeyPress}
     type="text"
     className="form-control"
     placeholder="User name"
    />
    <span className="validation">{formErrors ? formErrors.username : ''}</span>
   </div>
   <div className="form-auth">
    <input
     name="password"
     onChange={handleChange}
     onKeyUp={hangleKeyPress}
     type="password"
     className="form-control"
     placeholder="Password"
    />
    <span className="validation">{formErrors ? formErrors.password : ''}</span>
   </div>
   <div className="form-auth checkbox">
    <input name="check" onChange={handleChange} type="checkbox" /> Remember me
   </div>
   <div className="form-auth">
    <button
     disabled={disable}
     className="btn btn-primary submit-btn"
     type="submit">
     Login
    </button>
   </div>
   <div className="other-link">
    Still without account?
    <Link to="/authenticate/register">Create one</Link>
   </div>
  </form>
 );
}
const mapStateToProps = (state) => {
 return {
  loginError: state.loginReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  login: (loginState) => {
   dispatch(authLogin(loginState));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
