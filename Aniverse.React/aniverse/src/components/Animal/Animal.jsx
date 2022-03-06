import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAnimal, animalFollow } from '../../redux/actions/animalAction';
import { getAnimalPosts } from '../../redux/actions/postAction';
import Moment from 'react-moment';
import AnimalPost from './AnimalPost';
import Posts from '../post/Posts';
import AnimalProfileEdit from './AnimalProfileEdit';

function Animal(props) {
 const animalname = useParams().animalname;

 const { animalPosts } = props;
 const { animalMethod } = props;

 const { follow } = props;
 const [followState, setfollowState] = useState({});
 const [isFollow, setIsFollow] = useState(true);

 useEffect(() => {
  animalMethod(animalname);
  animalPosts(animalname);
 }, [animalMethod, animalPosts, animalname]);

 const {
  id,
  name,
  postCount,
  breed,
  user,
  bio,
  birthday,
  coverPicture,
  profilePicture,
  animalFollow,
 } = props.animal;

 return (
  <div className="animal-profile">
   <div className="background-img">
    <img
     className="animal-cover-picture"
     src={
      coverPicture == null ? `../../img/animal_cover.jpg` : `${coverPicture}`
     }
    />
   </div>
   <div className="container animal-container">
    <div className="row profile-title">
     <div className="profile col-4">
      <img
       className="profile-img"
       src={
        profilePicture == null ? `../../img/animal.jpg` : `${profilePicture}`
       }
      />
     </div>
     <div className="profile-content col-8">
      <div className="title">
       <h2 className="col-3 profile-name">{name}</h2>
       <div className="col-9 profile-right-title ">
        {props.animal.user !== undefined ? (
         props.animal.user.id === props.userAuth.id ? (
          <AnimalProfileEdit />
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
         follow(followState);
        }}
        className="follow-button col-4">
        <button
         onClick={(e) => {
          const isFollowing = isFollow,
           animalId = id;
          setfollowState({
           ...followState,
           ...{ isFollowing, animalId },
          });
          setIsFollow(!isFollow);
         }}
         type="submit"
         className={`btn ${isFollow ? 'btn-primary' : 'btn-light'}`}>
         {isFollow ? 'Follow' : 'UnFollow'}
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
       {breed ? (
        <>
         <p className="bio-strong">
          Breed
          <span className="strong">{breed}</span>
         </p>
         <p className="bio-content">{bio}</p>
        </>
       ) : (
        ''
       )}
      </div>
     </div>
    </div>
    <div className="posts">
     <div className="row posts-title">
      <p className=" col-12">Posts</p>
     </div>
     <div className="row animal-posts">
      <Posts posts={props.posts} />
     </div>
    </div>
   </div>
  </div>
 );
}
const mapStateToProps = (state) => {
 return {
  posts: state.postReducer,
  animal: state.animalGetReducer,
  userAuth: state.userNavbarReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  animalMethod: (anmname) => {
   dispatch(getAnimal(anmname));
  },
  follow: (follow) => {
   dispatch(animalFollow(follow));
  },
  animalPosts: (animalname) => {
   dispatch(getAnimalPosts(animalname));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Animal);
