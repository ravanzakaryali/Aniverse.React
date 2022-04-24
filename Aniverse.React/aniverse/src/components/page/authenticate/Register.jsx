import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authRegister, registerError } from '../../../redux/actions/authAction';
import Loading from '../../common/Loading';
import Select from 'react-select';
import countryList from 'react-select-country-list';

function Register(props) {
 const [register, setRegisterError] = useState();
 const { registerAuth } = props;
 const [userState, setUserState] = useState({});
 const [formErrors, setFormErrors] = useState({});
 const [disableNext, setDisableNext] = useState(true);
 const [disableRegister, setDisableRegister] = useState(true);
 const [isSubmit, setIsSubmit] = useState(false);
 const [submit, setSubmit] = useState(false);
 const navigate = useNavigate();
 const [isActive, setIsActive] = useState(false);
 const options = useMemo(() => countryList().getData(), []);
 const handleSubmit = (e) => {
  e.preventDefault();
  if (isSubmit) {
   setIsActive(true);
   registerAuth(userState);
  }
 };

 const handleChange = (e) => {
  const { name, value } = e.target;
  setUserState({ ...userState, ...{ [name]: value } });
 };
 const hangleKeyPress = (e) => {
  if (userState) {
   if (
    userState.firstname &&
    userState.lastname &&
    userState.username &&
    userState.email &&
    userState.password &&
    userState.confirmPassword &&
    userState.birthday &&
    userState.gender
   ) {
    setDisableRegister(false);
   } else {
    setDisableRegister(true);
    setIsSubmit(true);
   }
  }
 };

 useEffect(() => {
  if (props.registerRequest.data.includes('Success'))
   return navigate('/authenticate/login');
  if (props.registerRequest.error) {
   setRegisterError(props.registerRequest.error);
   //  setIsActive(false);
  }
  if (register)
   if (register.response) {
    setFormErrors(register.response.data.errors);
   }
  document.title = 'Regsiter | Aniverse';
 }, [submit]);
 if (props) {
  if (props.error) {
   if (props.error.data) {
    setFormErrors(props.error.data.errors);
   }
  }
 }

 if (props.registerRequest.loading) return <Loading />;
 return (
  <form
   className="form-horizontal resgiter-form"
   onSubmit={(e) => handleSubmit(e)}>
   <h1 className="auth-title">Register</h1>
   <div className="row">
    <div className="form-auth col-6">
     <input
      name="firstname"
      onChange={handleChange}
      onKeyUp={hangleKeyPress}
      type="text"
      className="form-control col-6"
      placeholder="First name"
     />
     <span className="validation">
      {formErrors ? formErrors.Firstname : ''}
     </span>
    </div>
    <div className="form-auth col-6 second">
     <input
      name="lastname"
      onChange={handleChange}
      onKeyUp={hangleKeyPress}
      type="text"
      className="form-control col-6"
      placeholder="Last name"
     />
     <span className="validation">{formErrors ? formErrors.Lastname : ''}</span>
    </div>
    <div className="form-auth">
     <input
      name="username"
      onChange={handleChange}
      onKeyUp={hangleKeyPress}
      type="text"
      className="form-control"
      placeholder="User name"
     />
     <span className="validation">{formErrors ? formErrors.Username : ''}</span>
    </div>
    <div className="form-auth">
     <input
      name="email"
      onChange={handleChange}
      onKeyUp={hangleKeyPress}
      type="email"
      className="form-control"
      placeholder="Email"
     />
     <span className="validation">{formErrors ? formErrors.Email : ''}</span>
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
     <span className="validation">{formErrors ? formErrors.Password : ''}</span>
    </div>
    <div className="form-auth">
     <input
      name="confirmPassword"
      onChange={handleChange}
      onKeyUp={hangleKeyPress}
      type="password"
      className="form-control"
      placeholder="Confirm Password"
     />
     <span className="validation">
      {formErrors ? formErrors.ConfirmPassword : ''}
     </span>
    </div>
    <div className="form-auth">
     <Select
      options={options}
      onChange={(value) => {
       setUserState({ ...userState, ...{ address: value.label } });
      }}
     />
     <span className="validation">{formErrors ? formErrors.Address : ''}</span>
    </div>
    <div className="form-auth">
     <label className="label-input" htmlFor="birthday">
      Birthday
     </label>
     <input
      name="birthday"
      onChange={handleChange}
      onKeyUp={hangleKeyPress}
      type="date"
      className="form-control"
     />
     <span className="validation">{formErrors ? formErrors.Birthday : ''}</span>
    </div>
    <label className="label-input col-12">Gender</label>
    <div className="form-gender">
     <div className="from-auth">
      <input
       name="gender"
       id="genderMale"
       onChange={(e) => {
        handleChange(e);
        hangleKeyPress(e);
       }}
       type="radio"
       value="0"
      />
      <label htmlFor="genderMale">Male</label>
     </div>
     <div className="form-auth">
      <input
       name="gender"
       id="genderFemale"
       onChange={(e) => {
        handleChange(e);
        hangleKeyPress(e);
       }}
       type="radio"
       value="1"
      />
      <label htmlFor="genderFemale">Female</label>
     </div>
     <span className="validation">{formErrors ? formErrors.Gender : ''}</span>
    </div>
   </div>

   <div className="form-auth">
    <button
     onClick={() => {
      setSubmit(true);
     }}
     disabled={disableRegister}
     type="submit"
     className="btn btn-primary submit-btn">
     Register
    </button>
   </div>
   <div className="other-link">
    Are you have a account?
    <Link to="/authenticate/login">Login</Link>
   </div>
  </form>
 );
}

const mapStateToProps = (state) => {
 return {
  registerRequest: state.registerReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  registerAuth: (userState) => {
   dispatch(authRegister(userState));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
