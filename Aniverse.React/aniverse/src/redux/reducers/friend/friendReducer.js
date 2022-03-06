import * as actionTypes from "../../actions/actionTypes";
import initialState from '../initialState';

export function friendReducer(state = initialState.userFriend, action) {
    switch (action.type) {
        case actionTypes.GET_USER_FRIEND_SUCCESS:
            return action.payload
        case actionTypes.POST_FRIEND_CONFIRM_SUCCESS:
            return state
        default:
            return state;
    }
}
export function friendRequestReducer(state = initialState.userRequest, action) {
    switch (action.type) {
        case actionTypes.GET_USER_FRIEND_REQUEST_SUCCESS:
            return action.payload
        default:
            return state;
    }
}