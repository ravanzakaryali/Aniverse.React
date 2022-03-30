import initialState from '../initialState'
import * as actionTypes from '../../actions/actionTypes'

export function authReducer(state = initialState.authUser, action) {
    switch (action.type) {
        case actionTypes.USER_LOADDED:
        case actionTypes.USER_LOGOUT:
            return state
        default:
            return state;
    }
}
export function loginReducer(state = initialState.loginReducer, action) {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            window.location.reload();
            return action.payload
        case actionTypes.USER_LOGIN_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function registerReducer(state = initialState.register, action) {
    switch (action.type) {
        case actionTypes.USER_REGISTER_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actionTypes.USER_REGISTER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionTypes.USER_LOGOUT:
            state = "";
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}
