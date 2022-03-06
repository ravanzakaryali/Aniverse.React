import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { Navigate, Link } from 'react-router-dom'
import { authLogin } from '../../redux/actions/authAction'

function Login(props) {

    const { login } = props;
    const [loginState, setLoginState] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginState({ ...loginState, ...{ [name]: value } })
    };

    const handleSubmit = (e) => {
        setFormErrors(validate(loginState));
        e.preventDefault();
        setIsSubmit(true);
    };
    const validate = (values) => {
        const errors = {}
        if (!values.username) { errors.username = "Username is required" };
        if (!values.password) { errors.password = "Password is required" };
        return errors;
    }
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            login(loginState);
        }
    }, [formErrors]);
    const auth = useSelector(state => state.authReducer)
    if (auth.username) return <Navigate to="/" />
    return (
            <form className="form-horizontal" onSubmit={handleSubmit} >
                <h1 className='auth-title'>
                    Login
                </h1>
                <div className="form-auth">
                    <input name='username' onChange={handleChange}
                        type="text" className="form-control" placeholder="User name" />
                    <span className='validation'>{formErrors.username}</span>
                </div>
                <div className="form-auth">
                    <input name='password' onChange={handleChange}
                        type="password" className="form-control" placeholder="Password" />
                    <span className='validation'>{formErrors.password}</span>
                </div>
                <div className="form-auth checkbox">
                    <input name='check' onChange={handleChange}
                        type="checkbox" /> Remember me
                </div>
                <div className="form-auth">
                    <button className="btn btn-primary submit-btn" type="submit">
                        Login</button>
                </div>
                <div className='other-link'>
                    Still without account?
                    <Link to="/register">
                        Create one
                    </Link>
                </div>
            </form>
    )
}
const mapStateToProps = (state) => {
    return {
        userAuth: state,
        errorsState: state.errors
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (loginState) => {
            dispatch(authLogin(loginState));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

