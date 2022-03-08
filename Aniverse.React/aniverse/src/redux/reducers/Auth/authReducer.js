import initialState from '../initialState'
import * as actionTypes from '../../actions/actionTypes'

export function authReducer(state = initialState.authUser, action) {
    switch (action.type) {
        case actionTypes.USER_LOADDED:
        case actionTypes.POST_REGISTER_SUCCESS:
            return action.payload
        case actionTypes.POST_REGISTER_FAIL:
            return state;
        case actionTypes.POST_LOGIN_SUCCESS:
            return state;
        case actionTypes.POST_LOGIN_FAIL:
            return state.payload;
        default:
            return state;
    }
}
