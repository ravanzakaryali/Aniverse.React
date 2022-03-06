import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { authRegister } from '../../redux/actions/authAction'

function Register(props) {
    const { register } = props;
    const [userState, setUserState] = useState({})
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        register(userState);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserState({ ...userState, ...{ [name]: value } })
    };
    return (
        <form className="form-horizontal" onSubmit={handleSubmit} >
            <h1 className='auth-title'>
                Register
            </h1>
            <div className='row'>
                <div className="form-auth col-6">
                    <input name='firstname' onChange={handleChange}
                        type="text" className="form-control col-6" placeholder="First name" />
                    <span className='validation'>{formErrors.firstname}</span>
                </div>
                <div className="form-auth col-6">
                    <input name='lastname' onChange={handleChange}
                        type="text" className="form-control col-6" placeholder="Last name" />
                    <span className='validation'>{formErrors.lastname}</span>
                </div>
            </div>
            <div className="form-auth">
                <input name='username' onChange={handleChange}
                    type="text" className="form-control" placeholder="User name" />
                <span className='validation'>{formErrors.username}</span>
            </div>
            <div className="form-auth">
                <input name='email' onChange={handleChange}
                    type="email" className="form-control" placeholder="Email" />
                <span className='validation'>{formErrors.email}</span>
            </div>
            <div className="form-auth">
                <input name='password' onChange={handleChange}
                    type="password" className="form-control" placeholder="Password" />
                <span className='validation'>{formErrors.password}</span>
            </div>
            <div className="form-auth">
                <input name='confirmPassword' onChange={handleChange}
                    type="password" className="form-control" placeholder="Confirm Password" />
                <span className='validation'>{formErrors.confirmPassword}</span>
            </div>
            <div className="form-auth">
                <label className='label-input' htmlFor='birthday'>Birthday</label>
                <input name='birthday' onChange={handleChange}
                    type="date" className="form-control" />
                <span className='validation'>{formErrors.birthday}</span>
            </div>
            <label className='label-input col-12'>Gender</label>
            <div className="form-gender">
                <div className='from-auth'>
                    <input name='gender' id="genderMale" onChange={handleChange}
                        type="radio" value="0" />
                    <label htmlFor='genderMale'>Male</label>
                </div>
                <div className='form-auth'>
                    <input name='gender' id="genderFemale" onChange={handleChange}
                        type="radio" value="1" />
                    <label htmlFor='genderFemale'>Female</label>
                </div>
                <div className='form-auth'>
                    <input name='gender' id="genderOther" onChange={handleChange}
                        type="radio" value="Other" />
                    <label htmlFor='genderOther'>Other</label>
                </div>
                <span className='validation'>{formErrors.gender}</span>
            </div>
            <div className="form-auth">
                <button className="btn btn-primary submit-btn" type="submit">
                    Create</button>
            </div>
            <div className='other-link'>
                Are you have a account?
                <Link to="/login">
                    Login
                </Link>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        userAuth: state.authUser,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        register: (userState) => {
            dispatch(authRegister(userState));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);