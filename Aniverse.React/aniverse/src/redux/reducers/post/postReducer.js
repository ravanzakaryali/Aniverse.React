import * as actionTypes from "../../actions/actionTypes";
import initialState from '../initialState';

export function postReducer(state = initialState.posts, action) {
    switch (action.type) {

        case actionTypes.GET_USER_POST_SUCCESS:
            return action.payload
        case actionTypes.GET_ANIMAL_POST_SUCCESS:
            return action.payload

        default:
            return state;
    }
}
export function postsReducer(state = initialState.posts, action) {
    switch (action.type) {
        case actionTypes.GET_USER_POST_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_USER_POST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case actionTypes.GET_USER_POST_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        // case actionTypes.GET_alll:
        //     return {
        //         ...state,
        //         loading: true
        //     }
        case actionTypes.GET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case actionTypes.GET_ALL_POSTS_ERROR:
            return {
                ...state,
                error: "Error posts",
                loading: false
            }
        case actionTypes.POST_CERATE_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.POST_CERATE_SUCCESS:
            return {
                ...state,
                data: [action.payload, ...state.data],
                loading: false
            }
        case actionTypes.POST_CERATE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case actionTypes.GET_FRIEND_ALL_POSTS_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_FRIEND_ALL_POSTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case actionTypes.GET_FRIEND_ALL_POSTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case actionTypes.LIKE_POST_SUCCESS:
            state.data.find(s => s.id === action.payload.postId).likes
                .push({ userId: action.payload.userId, postId: action.payload.postId })
            return {
                ...state,
                data: state.data,
                loading: false
            }
        case actionTypes.LIKE_DELETE_SUCCES:
            state.data.find(s => s.id === action.payload.postId).likes = state.data.find(s => s.id === action.payload.postId).likes
                .filter(l => l.userId !== action.payload.userId && l.postId === action.payload.postId);
            return {
                ...state,
                data: state.data,
                loading: false
            }
        case actionTypes.LIKE_POST_ERROR:
            return {
                ...state,
                error: "Like error",
                loading: false
            }
        case actionTypes.COMMENT_CREATE_SUCCESS:
            state.data.find(s => s.id === action.payload.postId).comments
                .push(action.payload)
            return {
                ...state,
                data: state.data,
                loading: false
            }
        case actionTypes.POST_ARCHIVE_SUCCESS:
            return {
                ...state,
                data: state.data.filter(p => p.id !== action.payload),
                loading: false
            }
        case actionTypes.POST_ARCHIVE_ERROR:
            return {
                ...state,
                data: state.data,
                loading: false,
                error: action.payload.response.data
            }
        case actionTypes.POST_DELETE_SUCCESS:
            return {
                ...state,
                data: state.data.filter(p => p.id !== action.payload),
                loading: false
            }
        case actionTypes.POST_DELETE_ERROR:
            return {
                ...state,
                data: state.data,
                error: action.payload.response.data,
                loading: false,
            }
        case actionTypes.POST_EDIT_SUCCESS:
            state.data.find(p => p.id === action.payload.postId)
                .content = action.payload.content
            return {
                ...state,
                data: state.data,
                loading: false,

            }
        case actionTypes.POST_EDIT_ERROR:
            return {
                ...state,
                data: state.data,
                error: action.payload.response,
                loading: false,

            }
        case actionTypes.GET_ANIMAL_POST_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_ANIMAL_POST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case actionTypes.GET_ANIMAL_POST_ERROR:
            return {
                ...state,
                error: "Error",
                loading: false,

            }
        case actionTypes.GET_POST_ARCHIVE_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_POST_ARCHIVE_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case actionTypes.GET_POST_ARCHIVE_ERROR:
            return {
                ...state,
                error: "Error",
                loading: false
            }
        case actionTypes.POST_RESTORE_SUCCESS:
            return {
                ...state,
                data: state.data.filter(p => p.id !== action.payload),
                loading: false
            }
        case actionTypes.GET_POST_RECYCLE_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_POST_RECYCLE_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case actionTypes.GET_POST_RECYCLE_ERROR:
            return {
                ...state,
                error: "Error",
                loading: false
            }
        case actionTypes.GET_POST_SAVE_LOADING:
            return {
                ...state,
                laoding: true
            }
        case actionTypes.GET_POST_SAVE_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case actionTypes.GET_POST_SAVE_ERROR:
            return {
                ...state,
                error: "Error",
                loading: false
            }
        case actionTypes.GET_PAGE_POST_LOADING:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_PAGE_POST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case actionTypes.GET_PAGE_POST_ERROR:
            return {
                ...state,
                error: "Error",
                loading: false
            }
        default:
            return state;
    }
}
export function postModalReducer(state = initialState.postModal, action) {
    switch (action.type) {
        case actionTypes.POST_MODAL:
            return action.payload
        default:
            return state;
    }
}