import * as actionTypes from "../../actions/actionTypes";
import initialState from '../initialState';

export function friendReducer(state = initialState.friends, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_FRIENDS_SUCCESS:
            return action.payload
        case actionTypes.GET_ALL_FRIENDS_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function getFriendRequestReducer(state = initialState.getFriendRequest, action) {
    switch (action.type) {
        case actionTypes.GET_FRIEND_REQUEST_SUCCESS:
            return action.payload
        case actionTypes.GET_FRIEND_REQUEST_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function friendRequestReducer(state = initialState.friendRequest, action) {
    switch (action.type) {
        case actionTypes.CONFIRM_FRIEND_SUCCESS:
            return action.payload
        case actionTypes.CONFIRM_FRIEND_ERROR:
            return action.payload
        case actionTypes.ADD_FRIEND_SUCCESS:
            return action.payload
        case actionTypes.ADD_FRIEND_ERROR:
            return action.payload
        case actionTypes.UN_FRIEND_SUCCESS:
            return action.payload
        case actionTypes.UN_FRIEND_ERROR:
            return action.payload
        case actionTypes.DECLINED_FRIEND_SUCCESS:
            return action.payload
        case actionTypes.DECLINED_FRIEND_ERROR:
            return action.payload
        case actionTypes.BLOCK_FRIEND_SUCCESS:
            return action.payload
        case actionTypes.BLOCK_FRIEND_ERROR:
            return action.payload
        default:
            return state;
    }
}