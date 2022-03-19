import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAnimal, animalFollow } from '../../redux/actions/animalAction';
import { getAnimalPosts } from '../../redux/actions/postAction';
import Moment from 'react-moment';
import Posts from '../post/Posts';
import AnimalProfileEdit from './AnimalProfileEdit';
import AnimalPhotos from './AnimalPhotos';
import AnimalCoverPicture from './AnimalCoverPicture';
import AnimalProfilePicture from './AnimalProfilePicture';
import { useWindowSize } from '@react-hook/window-size';

function Animal(props) {
 const animalname = useParams().animalname;
 const ref = useRef(null);
 const [width, setWidth] = useState();
 const [comRender, setComRender] = useState(false);
 const { animalPosts } = props;
 const { animalGetRequest } = props;

 const [activeRow, setActiveRow] = useState(true);
 const { follow } = props;
 const [followState, setfollowState] = useState({});
 const {
  id,
  name,
  postCount,
  breed,
  user,
  bio,
  isFollow,
  birthday,
  coverPicture,
  profilPicture,
  animalFollow,
 } = props.animal;
 const [isFollowLocal, setIsFollowLocal] = useState(isFollow);
 useEffect(() => {
  setWidth(ref.current.offsetWidth);
  if (name) document.title = `${name} | Aniverse`;
  animalGetRequest(animalname);
  animalPosts(animalname);
 }, [
  animalGetRequest,
  animalPosts,
  bio,
  breed,
  isFollowLocal,
  animalname,
  name,
  isFollow,
  comRender,
 ]);

 return (
  <div className="animal-profile" ref={ref} id="animal_profile">
   <div
    className="background-img"
    style={window.location.pathname.includes('/animals') ? { top: '0' } : {}}>
    <AnimalCoverPicture coverPicture={coverPicture} animalId={id} />
   </div>
   <div
    className="container animal-container"
    style={
     window.location.pathname.includes('/animals')
      ? { padding: '0px 50px' }
      : {}
    }>
    <div className="row profile-title">
     <div className="profile col-3">
      <AnimalProfilePicture profilPicture={profilPicture} animalId={id} />
     </div>
     <div className="profile-content col-9">
      <div className="title">
       <h2 className="col-3 profile-name">{name}</h2>
       <div className="col-9 profile-right-title ">
        {props.animal.user !== undefined ? (
         props.animal.user.id === props.userAuth.id ? (
          <AnimalProfileEdit
           setComRender={setComRender}
           comRender={comRender}
          />
         ) : (
          ''
         )
        ) : (
         ''
        )}
        <div className="profile-owner">
         {user !== undefined ? (
          <Link to={`/user/${user.username}`} className="owner btn btn-light">
           {user.firstname} {user.lastname}
          </Link>
         ) : (
          ''
         )}
        </div>
       </div>
      </div>
      <div className="profile-counter col-12">
       <p className="count-sts col-4">
        <span className="counter">{postCount}</span>
        <span className="counter-name">Posts</span>
       </p>
       <p className="posts-s col-4">
        <span className="counter">
         {animalFollow ? animalFollow.length : ''}
        </span>
        <span className="counter-name">Follow</span>
       </p>
       <form
        onSubmit={(e) => {
         e.preventDefault();
         follow(followState, id);
        }}
        className="follow-button col-4">
        <button
         onClick={(e) => {
          const isFollowing = !isFollowLocal;
          setfollowState({
           ...followState,
           ...{ isFollowing },
          });
          setIsFollowLocal(!isFollowLocal);
         }}
         type="submit"
         className={`btn ${!isFollowLocal ? 'btn-primary' : 'btn-light'}`}>
         {!isFollowLocal ? 'Follow' : 'UnFollow'}
        </button>
       </form>
      </div>
      <div className="bio">
       <p className="bio-strong">
        Birthday
        <span className="strong">
         <Moment format="MMM DD YYYY">{Date.parse(birthday)}</Moment>
        </span>
       </p>
       <>
        {breed ? (
         <>
          <p className="bio-strong">
           Breed
           <span className="strong">{breed}</span>
          </p>
         </>
        ) : (
         ''
        )}
        <p className="bio-content">{bio}</p>
       </>
      </div>
     </div>
    </div>
    <div className="posts">
     <div className="row posts-title">
      <div className="col-6">
       <button
        className="btn btn-light"
        onClick={() => {
         setActiveRow(true);
        }}>
        Posts
       </button>
      </div>
      <div className="col-6">
       <button
        className="btn btn-light"
        onClick={() => {
         setActiveRow(false);
        }}>
        Photos
       </button>
      </div>
     </div>
     <div className="row animal-posts">
      {activeRow ? (
       <Posts
        setComRender={setComRender}
        comRender={comRender}
        posts={props.posts}
       />
      ) : (
       <AnimalPhotos />
      )}
     </div>
    </div>
   </div>
  </div>
 );
}
const mapStateToProps = (state) => {
 return {
  posts: state.postReducer,
  animal: state.getAnimalReducer,
  userAuth: state.userLoginReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  animalGetRequest: (animalname) => {
   dispatch(getAnimal(animalname));
  },
  follow: (follow, id) => {
   dispatch(animalFollow(follow, id));
  },
  animalPosts: (animalname) => {
   dispatch(getAnimalPosts(animalname));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Animal);
