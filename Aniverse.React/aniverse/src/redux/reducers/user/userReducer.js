import * as actionTypes from "../../actions/actionTypes";
import initialState from '../initialState';

export function userReducer(state = initialState.user, action) {
    switch (action.type) {
        case actionTypes.GET_USER_SUCCESS:
            return action.payload
        case actionTypes.GET_BLOCK_USERS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}

export function userNavbarReducer(state = initialState.userNavbar, action) {
    switch (action.type) {
        case actionTypes.GET_USER_NAVBAR_SUCCESS:
            return action.payload
        default:
            return state;
    }
}

export function usersReducer(state = initialState.users, action) {
    switch (action.type) {
        case actionTypes.GET_USERS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}
export function userPhotosReducer(state = initialState.userPhotos, action) {
    switch (action.type) {
        case actionTypes.GET_PHOTOS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}