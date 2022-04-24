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
import { AiTwotoneLike, AiOutlineLike } from 'react-icons/ai';
import { useWindowSize } from '@react-hook/window-size';
import Loading from '../common/Loading';

function Animal(props) {
 const animalname = useParams().animalname;
 const ref = useRef(null);
 const [width, setWidth] = useState();
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
 } = props.animal.data;
 const [isFollowing, setIsFollowLocal] = useState(isFollow);
 useEffect(() => {
  setIsFollowLocal(isFollow);
  setWidth(ref.current.offsetWidth);
  animalGetRequest(animalname);
  animalPosts(animalname);
  if (name) document.title = `${name} | Aniverse`;
 }, [animalname, name]);

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
        <div className="profile-owner">
         {user !== undefined ? (
          <Link to={`/user/${user.username}`} className="owner btn">
           {user.firstname} {user.lastname}
          </Link>
         ) : (
          ''
         )}
        </div>
        {props.animal.data.user !== undefined ? (
         props.animal.data.user.id === props.userAuth.id ? (
          <AnimalProfileEdit />
         ) : (
          ''
         )
        ) : (
         ''
        )}
       </div>
      </div>
      <div className="profile-counter col-12">
       <div className="count col-8">
        <p className="count-sts col-3">
         <span className="counter">{postCount}</span>
         <span className="counter-name">Posts</span>
        </p>
        <p className="posts-s col-3">
         <span className="counter">
          {animalFollow ? animalFollow.length : ''}
         </span>
         <span className="counter-name">Follow</span>
        </p>
       </div>
       <form
        onSubmit={(e) => {
         e.preventDefault();
         setfollowState({
          isFollowing: !isFollowing,
         });
         setIsFollowLocal(!isFollowing);
         follow(followState, id);
        }}
        className="follow-button col-4">
        {!isFollow ? (
         <button type="submit" className="btn btn-opacity-primary">
          <AiOutlineLike className="icon" />
          Follow
         </button>
        ) : (
         <button type="submit" className="btn btn-opacity-primary">
          <AiTwotoneLike className="icon" />
          Unfollow
         </button>
        )}
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
        className="btn btn-opacity-primary"
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
      {activeRow ? <Posts posts={props.posts} /> : <AnimalPhotos />}
     </div>
    </div>
   </div>
  </div>
 );
}
const mapStateToProps = (state) => {
 return {
  posts: state.postsReducer,
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
