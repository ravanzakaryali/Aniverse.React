import * as actionTypes from "./actionTypes"
import axios from 'axios';
import { header, baseUrl, headerPicture } from "./axiosConfiguration"


export function getFriendAnimalsSuccess(data) {
    return { type: actionTypes.GET_FRIEND_ANIMALS_ERROR, payload: data }
}
export function getFriendAnimalsError(error) {
    return { type: actionTypes.GET_FRIEND_ANIMALS_ERROR, payload: error }
}
export function getFriendAnimals(username, page, size) {
    return async function (dispatch) {
        let url = `${baseUrl}/animal/friends/${username}?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getFriendAnimalsSuccess(res.data));
            }).catch((error) => {
                dispatch(getFriendAnimalsError(error))
            })
    }
}

export function getAnimalPhotosSuccess(data) {
    return { type: actionTypes.GET_ANIMAL_PHOTOS_SUCCESS, payload: data }
}
export function getAnimalPhtotsError(error) {
    return { type: actionTypes.GET_ALL_FRIENDS_ERROR, payload: error }
}
export function getAnimalPhotos(animalname, page, size) {
    return async function (dispatch) {
        let url = `${baseUrl}/animal/photos/${animalname}?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getAnimalPhotosSuccess(res.data));
            }).catch((error) => {
                dispatch(getAnimalPhotosSuccess(error));
            })
    }
}

export function animalChangePorfileSuccess(data) {
    return { type: actionTypes.ANIMAL_CHANGE_PROFILE_SUCCESS, payload: data }
}
export function animalChangeProfileError(error) {
    return { type: actionTypes.ANIMAL_CHANGE_PROFILE_ERROR, payload: error }
}
export function animalChangeProfile(id, picture, imageSrc) {
    return async function (dispatch) {
        let url = `${baseUrl}/animal/profilePicture/${id}`;
        axios.post(url, picture, headerPicture)
            .then((res) => {
                dispatch(animalChangePorfileSuccess(imageSrc));
            }).catch((error) => {
                dispatch(animalChangeProfileError(error));
            })
    }
}

export function animalChangeCoverSuccess(data) {
    return { type: actionTypes.ANIMAL_CHANGE_COVER_SUCCESS, payload: data }
}
export function animalChangeCoverError(error) {
    return { type: actionTypes.ANIMAL_CHANGE_COVER_ERROR, payload: error }
}
export function animalChangeCover(id, picture, imgSrc) {
    return async function (dispatch) {
        let url = `${baseUrl}/animal/coverPicture/${id}`;
        axios.post(url, picture, headerPicture)
            .then((res) => {
                dispatch(animalChangeCoverSuccess(imgSrc));
            }).catch((error) => {
                dispatch(animalChangeCoverError(error));
            })
    }
}

export function getAnimalLoading() {
    return { type: actionTypes.GET_ANIMAL_LOADING }
}
export function getAnimalSuccess(data) {
    return { type: actionTypes.GET_ANIMAL_SUCCESS, payload: data }
}
export function getAnimalError(error) {
    return { type: actionTypes.GET_ANIMAL_ERROR, payload: error }
}
export function getAnimal(animalname) {
    return async function (dispatch) {
        dispatch(getAnimalLoading());
        let url = `${baseUrl}/animal/${animalname}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getAnimalSuccess(res.data))
            }).catch((error) => {
                dispatch(getAnimalError(error))
            })
    }
}

export function updateAnimalProfileSuccess(data) {
    return { type: actionTypes.ANIMAL_PROFILE_UPDATE_SUCCESS, payload: data }
}
export function updateAnimalProfileError(error) {
    return { type: actionTypes.ANIMAL_PROFILE_UPDATE_ERROR, payload: error }
}
export function updateAnimalProfile(id, profileData) {
    return async function (dispatch) {
        let url = `${baseUrl}/animal/update/${id}`;
        axios.put(url, profileData, header)
            .then((res) => {
                dispatch(updateAnimalProfileSuccess(profileData));
            }).catch((error) => {
                console.log(error);
                dispatch(updateAnimalProfileError(error));
            })

    }
}


export function animalFollowSuccess(data) {
    return { type: actionTypes.ANIMAL_FOLLOW_SUCCESS, payload: data }
}
export function animalUnFollowSuccess(data) {
    return { type: actionTypes.ANIMAL_UNFOLLOW_SUCCESS, payload: data }
}
export function animalFollowError(error) {
    return { type: actionTypes.ANIMAL_FOLLOW_ERROR, payload: error }
}
export function animalFollow(follow, id) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/animal/follow/${id}`;
        axios.post(url, follow, header)
            .then((res) => {
                if (follow.isFollowing) {
                    dispatch(animalFollowSuccess(res.data));
                } else {
                    dispatch(animalUnFollowSuccess(res.data))
                }
            }).catch((error) => {
                dispatch(animalFollowError(error));
            });
    }
}

export function getAllAnimalsSuccess(data) {
    return { type: actionTypes.GET_ALL_ANIMALS_SUCCESS, payload: data }
}
export function getAllAnimalsError(error) {
    return { type: actionTypes.GET_ALL_ANIMALS_ERROR, payload: error }
}
export function getAllAnimals(page, size) {
    return async function (dispatch) {
        let url = `${baseUrl}/animal?page=${page}&size=${size}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getAllAnimalsSuccess(res.data));
            }).catch((error) => {
                dispatch(getAllAnimalsError(error));
            })

    }
}

export function getAnimalUserSuccess(data) {
    return { type: actionTypes.GET_ANIMAL_USER_SUCCESS, payload: data }
}
export function getAnimalUserError(error) {
    return { type: actionTypes.GET_ANIMAL_USER_ERROR, payload: error }
}
export function getAnimalUser(username) {
    return async function (dispatch) {
        let url = `${baseUrl}/animal/user/${username}`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getAnimalUserSuccess(res.data));
            }).catch((error) => {
                dispatch(getAnimalUserError(error));
            })
    }
}

export function getAnimalCategorySuccess(data) {
    return { type: actionTypes.GET_ANIMAL_CATEGORY_SUCCESS, payload: data }
}
export function getAnimalCategoryError(error) {
    return { type: actionTypes.GET_ANIMAL_CATEGORY_ERROR, payload: error }
}
export function getAnimalCategory() {
    return async function (dispatch) {
        let url = `${baseUrl}/animal/category`;
        axios.get(url, header)
            .then((res) => {
                dispatch(getAnimalCategorySuccess(res.data));
            }).catch((error) => {
                dispatch(getAnimalCategoryError(error));
            })
    }
}
export function createAnimalLoading() {
    return { type: actionTypes.CREATE_ANIMAL_LOADING }
}
export function createAnimalSuccess(animal) {
    return { type: actionTypes.CREATE_ANIMAL_SUCCESS, payload: animal }
}
export function createAnimalError(error) {
    return { type: actionTypes.CREATE_ANIMAL_ERROR, payload: error }
}
export function createAnimal(animalCreate) {
    return async function (dispatch) {
        dispatch(createAnimalLoading());
        let url = `${actionTypes.baseUrl}/animal/create`;
        axios.post(url, animalCreate, header)
            .then((res) => {
                dispatch(createAnimalSuccess(res.data));
            }).catch((error) => {
                dispatch(createAnimalError(error));
            })
    }
}

export function selectAnimalSuccess(data) {
    return { type: actionTypes.GET_SELECT_ANIMAL_SUCCESS, payload: data }
}
export function selectAnimalError(error) {
    return { type: actionTypes.GET_SELECT_ANIMAL_ERROR, payload: error }
}
export function selectAnimal() {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/animal/select`
        axios.get(url, header)
            .then((res) => {
                dispatch(selectAnimalSuccess(res.data));
            }).catch((error) => {
                dispatch(selectAnimalError(error));
            })
    }
}

export function deleteAnimalSuccess(data) {
    return { type: actionTypes.DELETE_ANIMAL_SUCCESS, payload: data }
}
export function deleteAnimalError(error) {
    return { type: actionTypes.DELETE_ANIMAL_ERROR, payload: error }
}
export function deleteAnimal(id) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/animal/delete/${id}`
        axios.delete(url, header)
            .then((res) => {
                dispatch(deleteAnimalSuccess(id));
            }).catch((error) => {
                dispatch(deleteAnimalError(error));
            })
    }
}