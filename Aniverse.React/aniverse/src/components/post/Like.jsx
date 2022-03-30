import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { likePost } from '../../redux/actions/postAction';

function Like(props) {
 const userId = JSON.parse(localStorage.getItem('loginUser')).id;
 const { likeRequest } = props;

 const [likeActive, setLikeActive] = useState(true);
 const [likeState, setLikeState] = useState({});

 const likeSubmit = (e) => {
  e.preventDefault();
  likeRequest(likeState);
 };

 const likeClikc = (e) => {
  setLikeState({
   postId: props.postId,
   likeType: 0,
   isLike: likeActive,
  });
  setLikeActive(!likeActive);
 };

 const isLike = props.likes.some((like) => like.userId === userId);

 useEffect(() => {
  if (isLike) {
   setLikeActive(!likeActive);
  }
 }, []);

 return (
  <>
   <form onSubmit={likeSubmit}>
    <button onClick={likeClikc} type="submit" className="btn btn-like">
     {likeActive ? (
      <>
       <FontAwesomeIcon className="icon" icon="fa-regular fa-heart" />
       Like
      </>
     ) : (
      <>
       <FontAwesomeIcon className="icon" icon="fa-solid fa-heart" />
       Like
      </>
     )}
    </button>
   </form>
  </>
 );
}
const mapDispatchToProps = (dispatch) => {
 return {
  likeRequest: (likeData) => {
   dispatch(likePost(likeData));
  },
 };
};

export default connect(null, mapDispatchToProps)(Like);
