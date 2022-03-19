import * as actionTypes from "../../actions/actionTypes";
import initialState from '../initialState';

export function allAnimalsReducer(state = initialState.allAnimals, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_ANIMALS_SUCCESS:
            return action.payload
        case actionTypes.GET_ALL_ANIMALS_ERROR:
            return action.payload
        default:
            return state;
    }
}

export function getAnimalReducer(state = initialState.animal, action) {
    switch (action.type) {
        case actionTypes.GET_ANIMAL_SUCCESS:
            return action.payload
        case actionTypes.GET_ANIMAL_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function friendsAnimalReducer(state = initialState.friendsAnimal, action) {
    switch (action.type) {
        case actionTypes.GET_FRIEND_ANIMALS_SUCCESS:
            return action.payload
        case actionTypes.GET_FRIEND_ANIMALS_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function animalPostReducer(state = initialState.animalPost, action) {
    switch (action.type) {
        case actionTypes.GET_ANIMAL_POST_SUCCESS:
            return action.payload
        default:
            return state;
    }
}

export function animalReducer(state = initialState.animals, action) {
    switch (action.type) {
        case actionTypes.GET_ANIMAL_USER_SUCCESS:
            return action.payload
        case actionTypes.GET_ANIMAL_USER_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function animalCategoryReducer(state = initialState.animalCategory, action) {
    switch (action.type) {
        case actionTypes.GET_ANIMAL_CATEGORY_SUCCESS:
            return action.payload
        case actionTypes.GET_ANIMAL_CATEGORY_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function selectAnimalReducer(state = initialState.selectAnimal, action) {
    switch (action.type) {
        case actionTypes.GET_SELECT_ANIMAL_SUCCESS:
            return action.payload
        case actionTypes.GET_SELECT_ANIMAL_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function getAnimalPhototsReducer(state = initialState.animalPhotos, action) {
    switch (action.type) {
        case actionTypes.GET_ANIMAL_PHOTOS_SUCCESS:
            return action.payload
        case actionTypes.GET_ANIMAL_PHOTOS_ERROR:
            return action.payload
        default:
            return state;
    }
}
export function animalChangePictureReducer(state = initialState.changePicture, action) {
    switch (action.type) {
        case actionTypes.ANIMAL_CHANGE_COVER_SUCCESS:
            return action.payload
        case actionTypes.ANIMAL_CHANGE_COVER_ERROR:
            return action.payload
        case actionTypes.ANIMAL_CHANGE_PROFILE_SUCCESS:
            return action.payload
        case actionTypes.ANIMAL_CHANGE_PROFILE_ERROR:
            return action.payload
        default:
            return state
    }
}
export function animalProfileUpdateReducer(state = initialState.animalUpdate, action) {
    switch (action.type) {
        case actionTypes.ANIMAL_PROFILE_UPDATE_SUCCESS:
            return action.payload
        case actionTypes.ANIMAL_CHANGE_PROFILE_ERROR:
            return action.payload
        default:
            return state
    }
}
export function animalFollowReducer(state = initialState.animalFollow, action) {
    switch (action.type) {
        case actionTypes.ANIMAL_FOLLOW_SUCCESS:
            return action.payload
        case actionTypes.ANIMAL_FOLLOW_ERROR:
            return action.payload
        default:
            return state
    }
}
