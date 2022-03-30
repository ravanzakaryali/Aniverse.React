import * as actionTypes from "../../actions/actionTypes";
import initialState from '../initialState';


export function pageAllReducer(state = initialState.pageAll, action) {
    switch (action.type) {
        case actionTypes.GET_USER_FOLLOW_PAGE_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case actionTypes.GET_USER_FOLLOW_PAGE_ERROR:
            return {
                ...state,
                loading: false
            }
        case actionTypes.GET_ALL_PAGE_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case actionTypes.GET_ALL_PAGE_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}
export function pageReducer(state = initialState.page, action) {
    switch (action.type) {
        case actionTypes.PAGE_CREATE_LOADING:
            return {
                ...state,
                laoding: false
            }
        case actionTypes.PAGE_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case actionTypes.PAGE_CREATE_ERROR:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actionTypes.GET_PAGE_LOADING:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_PAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actionTypes.GET_PAGE_ERROR:
            return {
                ...state,
                loading: false,
                error: ""
            }
        case actionTypes.PAGE_PROFILE_CHANGE_SUCCESS:
            state.data.profilPicture = action.payload
            return {
                ...state,
                loading: false,
                data: state.data
            }
        case actionTypes.PAGE_COVER_CHANGE_SUCCESS:
            state.data.coverPicture = action.payload
            return {
                ...state,
                loading: false,
                data: state.data
            }
        case actionTypes.PAGE_FOLLOW_SUCCESS:
            state.data.pageFollow.push({ userId: action.payload });
            return {
                ...state,
                data: state.data,
                loading: false
            }
        case actionTypes.PAGE_FOLLOW_ERROR:
            return {
                ...state,
                data: state.data,
                loading: false
            }
        case actionTypes.PAGE_UNFOLLOW_SUCCESS:
            state.data.pageFollow = state.data.pageFollow.filter(p => p.userId !== action.payload)
            return {
                ...state,
                data: state.data,
                loading: false
            }
        case actionTypes.PAGE_UNFOLLOW_ERROR:
            return {
                ...state,
                data: state.data,
                loading: false
            }
        case actionTypes.PAGE_UPDATE_SUCCESS:
            state.data.about = action.payload.about;
            state.data.website = action.payload.website;
            return {
                ...state,
                data: state.data,
                loading: false
            }
        default:
            return state;
    }
}


export function pageGetPhotosReducer(state = initialState.pagePhotos, action) {
    switch (action.type) {
        case actionTypes.GET_PAGE_PHOTOS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: ''
            }
        case actionTypes.GET_PAGE_PHOTOS_ERROR:
            return {
                ...state,
                error: ''
            }
        default:
            return state;
    }
}

export function pageFollowersReducer(state = initialState.pageFollowers, action) {
    switch (action.type) {
        case actionTypes.GET_PAGE_FOLLOWERS_USERS_LOADING:
            return {
                ...state,
                loading: false
            }
        case actionTypes.GET_PAGE_FOLLOWERS_USERS_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case actionTypes.GET_PAGE_FOLLOWERS_USERS_ERROR:
            return {
                ...state,
                error: ''
            }

        default:
            return state;
    }
}