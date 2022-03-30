import * as actionTypes from "../../actions/actionTypes";
import initialState from '../initialState';

export function userReducer(state = initialState.user, action) {
    switch (action.type) {
        case actionTypes.GET_USER_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case actionTypes.GET_USER_ERROR:
            return {
                ...state,
                error: "Error user profile",
                loading: false
            }
        case actionTypes.PROFILE_CREATE_SUCCESS:
            state.data.profilPicture = action.payload
            return {
                ...state,
                data: state.data,
                loading: false
            }
        case actionTypes.PROFILE_CREATE_ERROR:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case actionTypes.COVER_CREATE_SUCCESS:
            state.data.coverPicture = action.payload
            return {
                ...state,
                data: state.data,
                loading: false
            }
        case actionTypes.COVER_CREATE_ERROR:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case actionTypes.BIO_CHANGE_LOADING:
            return {
                ...state,
                data: state.data,
                bioLoading: true
            }
        case actionTypes.BIO_CHANGE_SUCCESS:
            state.data.bio = action.payload
            return {
                ...state,
                data: state.data,
                bioLoading: false
            }
        case actionTypes.BIO_CHANGE_ERROR:
            return {
                ...state,
                data: state.data,
                bioLoading: false
            }
        default:
            return state;
    }
}

export function usersAllReducer(state = initialState.users, action) {
    switch (action.type) {
        case actionTypes.GET_All_USERS_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_All_USERS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case actionTypes.GET_All_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: "User get error"
            }
        case actionTypes.ADD_FRIEND_LOADING:
            return {
                ...state,
                data: state.data,
                addFriend: true,
            }
        case actionTypes.ADD_FRIEND_SUCCESS:
            return {
                ...state,
                data: state.data.filter(u => u.id !== action.payload),
                addFriend: false,
            }
        case actionTypes.ADD_FRIEND_ERROR:
            return {
                ...state,
                data: state.data,
                loading: false
            }
        default:
            return state;
    }
}

export function userPagesReducer(state = initialState.userPages, action) {
    switch (action.type) {
        case actionTypes.GET_USER_PAGES_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_USER_PAGES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case actionTypes.GET_USER_PAGES_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
export function userOnlyPhotosReducer(state = initialState.userPhotos, action) {
    switch (action.type) {
        case actionTypes.GET_ONLY_USER_PHOTOS_SUCCESS:
            return action.payload
        case actionTypes.GET_ONLY_USER_PHOTOS_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function userLoginReducer(state = initialState.userLogin, action) {
    switch (action.type) {
        case actionTypes.GET_USER_LOGIN_SUCCESS:
            return action.payload
        case actionTypes.GET_USER_LOGIN_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function animalFollowsReducer(state = initialState.animalFollows, action) {
    switch (action.type) {
        case actionTypes.GET_USER_FOLLOWS_ANIMAL_SUCCESS:
            return action.payload
        case actionTypes.GET_USER_FOLLOWS_ANIMAL_ERROR:
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