
import jwtDecode from 'jwt-decode'
let user;
let id = null;
let username = null;
if (localStorage.getItem("token") != null) {
    user = jwtDecode(localStorage.getItem("token"));
    id = user.id;
    username = user.username;   
}
export default {
    users: [],
    user: [],
    userNavbar: [],
    userFriend: [],
    userRequest: [],
    post: [],
    posts: [],
    animalPost: [],
    animals: [],
    selectAnimal:[],
    animal: [],
    storyFriend: [],
    userPhotos: [],
    animalCategory:[],
    story: [],
    authUser: [{
        token: localStorage.getItem("token"),
        id: id,
        username: username,
    }]
}