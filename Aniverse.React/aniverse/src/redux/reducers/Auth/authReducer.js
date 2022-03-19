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
            return action.payload
        case actionTypes.USER_LOGIN_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function registerReducer(state = initialState.registerReducer, action) {
    switch (action.type) {
        case actionTypes.USER_REGISTER_SUCCESS:
            return action.payload
        case actionTypes.USER_REGISTER_ERROR:
            return action.payload
        default:
            return state;
    }
}
