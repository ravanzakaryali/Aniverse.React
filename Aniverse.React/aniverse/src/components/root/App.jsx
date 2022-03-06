import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from '../page/home/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import User from '../user/User';
import { loadUser } from '../../redux/actions/authAction';
import '../../sass/main.scss';
import Navbar from '../navbar/Navbar';
import Profile from '../profile/Profile';
import UserFriend from '../profile/UserFriend';
import Auth from '../auth/Auth';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Animal from '../Animal/Animal';
import Chat from '../ChatHub/Chat';
import People from '../page/people/People';
import AllUser from '../user/AllUser';
import FriendsIntro from '../friend/FriendsIntro';
import AllFriend from '../page/people/AllFriend';

function App() {
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(loadUser());
 }, [dispatch]);

 return (
  <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="people" element={<People />}>
     <Route path="friends" element={<AllFriend />} />
     <Route path="friends_request" element={<AllUser />} />
     <Route path="birthday" element={<AllUser />} />
     <Route index element={<AllUser />} />
    </Route>
    <Route path="user/:username" element={<User />}>
     <Route path="friends" element={<UserFriend />} />
     <Route index element={<Profile />} />
     <Route path="chat" element={<Chat />} />
    </Route>
    <Route path="animal/:animalname" element={<Animal />} />
    <Route path="auth/" element={<Auth />}>
     <Route path="login" element={<Login />} />
     <Route path="register" element={<Register />} />
    </Route>
   </Routes>
  </BrowserRouter>
 );
}

export default App;
