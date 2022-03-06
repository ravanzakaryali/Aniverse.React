import initialState from '../initialState'
import * as actionTypes from '../../actions/actionTypes'
import jwtDecode from 'jwt-decode'

export function authReducer(state = initialState.authUser, action) {
    switch (action.type) {
        case actionTypes.USER_LOADDED:
        case actionTypes.POST_REGISTER_SUCCESS:
            return action.payload
        case actionTypes.POST_REGISTER_FAIL:
            return state;
        case actionTypes.POST_LOGIN_SUCCESS:
            const user = jwtDecode(action.payload);
            return {
                ...initialState.authUser,
                token: action.token,
                username: user.username,
                fullname: user.fullname,
                id: user.id,
                email: user.email
            }
        case actionTypes.POST_LOGIN_FAIL:
            return state.payload;
        default:
            return state;
    }
}
