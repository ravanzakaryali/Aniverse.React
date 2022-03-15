import * as actionTypes from "./actionTypes"
import axios from 'axios';
import { header, baseUrl } from "./axiosConfiguration"


export function getFriendAnimalsSuccess(data) {
    return { type: actionTypes.GET_FRIEND_ANIMALS_ERROR, payload: data }
}
export function getFriendAnimalsError(data) {
    return { type: actionTypes.GET_FRIEND_ANIMALS_ERROR, payload: data }
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
export function getAnimalSuccess(animal) {
    return { type: actionTypes.GET_ANIMAL_SUCCESS, payload: animal }
}
export function getAnimalUserSuccess(animals) {
    return { type: actionTypes.GET_ANIAML_USER_SUCCESS, payload: animals }
}
export function getAnimalFollowSuccess(result) {
    return { type: actionTypes.ANIMAL_FOLLOW_SUCCESS, payload: result }
}
export function getAnimalCategorySuccess(result) {
    return { type: actionTypes.GET_ANIMAL_CATEGORY_SUCCESS, payload: result }
}
export function createAnimalSuccess(animal) {
    return { type: actionTypes.CREATE_ANIMAL_SUCCESS, payload: animal }
}
export function selectAnimalSuccess(selectAnimal) {
    return { type: actionTypes.GET_SELECT_ANIMAL_SUCCESS, payload: selectAnimal }
}
export function getAnimal(animalname) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/animal/${animalname}`;
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getAnimalSuccess(res.data))
        }).catch((error) => {
            console.log(error.response.data.message);
        })
    }
}

export function getAnimalUser(username) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/animal/user/${username}`;
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getAnimalUserSuccess(res.data));
        }).catch((error) => {
            console.log(error.response.data.message);
        })
    }
}
export function animalFollow(follow) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/animal/follow`;
        axios.post(url, follow, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getAnimalFollowSuccess(res.data))
        }).catch((error) => {
            console.log(error.response.data.message);
        });
    }
}
export function getAnimalCategory() {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/animal/category`;
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(getAnimalCategorySuccess(res.data))
        }).catch((error) => {
            console.log(error.response.data.message);
        })
    }
}
export function createAnimal(animalCreate) {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/animal/create`;
        axios.post(url, animalCreate, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(createAnimalSuccess())
        }).catch((error) => {
            console.log(error.response.data.message);
        })
    }
}
export function selectAnimal() {
    return async function (dispatch) {
        let url = `${actionTypes.baseUrl}/animal/select`
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        }).then((res) => {
            dispatch(selectAnimalSuccess(res.data))
        }).catch((error) => {
            console.log(error.response.data.message);
        })
    }
}