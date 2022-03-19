import * as actionTypes from "../../actions/actionTypes";
import initialState from '../initialState';

export function postReducer(state = initialState.posts, action) {
    switch (action.type) {

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
export function postCreateReducer(state = initialState.posts, action) {
    switch (action.type) {
        case actionTypes.POST_CERATE_SUCCESS:
            return action.payload
        case actionTypes.POST_CERATE_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function postArchiveReducer(state = initialState.postArchive, action) {
    switch (action.type) {
        case actionTypes.GET_POST_ARCHIVE_SUCCESS:
            return action.payload
        case actionTypes.GET_POST_ARCHIVE_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function postRecycleReducer(state = initialState.postRecycle, action) {
    switch (action.type) {
        case actionTypes.GET_POST_RECYCLE_SUCCESS:
            return state.payload
        case actionTypes.GET_POST_RECYCLE_ERROR:
            return state.payload
        default:
            return state;
    }
}