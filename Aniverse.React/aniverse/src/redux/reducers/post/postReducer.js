import * as actionTypes from "../../actions/actionTypes";
import initialState from '../initialState';

export function postReducer(state = initialState.posts, action) {
    switch (action.type) {
        case actionTypes.POST_POST_CREATE_SUCCESS:
            return state
        case actionTypes.LIKE_POST_SUCCESS:
            return state
        case actionTypes.GET_ALL_POSTS_SUCCESS:
            return action.payload
        case actionTypes.GET_USER_POST_SUCCESS:
            return action.payload
        case actionTypes.GET_ANIMAL_POST_SUCCESS:
            return action.payload
        case actionTypes.GET_FRIEND_ALL_POSTS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}