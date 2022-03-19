import * as actionTypes from "../../actions/actionTypes";
import initialState from '../initialState';

export function userReducer(state = initialState.user, action) {
    switch (action.type) {
        case actionTypes.GET_USER_SUCCESS:
            return action.payload
        case actionTypes.GET_USER_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function profilePictureReducer(state = initialState.profilePicture, action) {
    switch (action.type) {
        case actionTypes.PROFILE_CREATE_SUCCESS:
            return action.payload
        case actionTypes.PROFILE_CREATE_ERROR:
            return action.payload
        default:
            return state;
    }
}

export function usersAllReducer(state = initialState.users, action) {
    switch (action.type) {
        case actionTypes.GET_All_USERS_SUCCESS:
            return action.payload
        case actionTypes.GET_All_USERS_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function userPhotosReducer(state = initialState.userPhotos, action) {
    switch (action.type) {
        case actionTypes.GET_PHOTOS_SUCCESS:
            return action.payload
        case actionTypes.GET_ONLY_USER_PHOTOS:
            return action.payload
        default:
            return state;
    }
}
export function userLoginReducer(state = initialState.userLogin, action) {
    switch (action.type) {
        case actionTypes.GET_USER_LOGIN_SUCCESS:
            return action.payload
        default:
            return state;
    }
}
export function animalFollowsReducer(state = initialState.animalFollows, action) {
    switch (action.type) {
        case actionTypes.GET_USER_FOLLOWS_ANIMAL:
            return action.payload
        default:
            return state;
    }
}
export function seachUsersReducer(state = initialState.searchUsers, action) {
    switch (action.type) {
        case actionTypes.GET_SEARCH_SUCCESS:
            return action.payload
        case actionTypes.GET_SEARCH_ERROR:
            return action.payload
        default:
            return state;
    }
}