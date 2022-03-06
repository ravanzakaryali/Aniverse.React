import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
 getPost,
 getPosts,
 likePost,
 getAnimalPosts,
} from '../../redux/actions/postAction';
import ReactTimeAgo from 'react-time-ago';
import OwlCarousel from 'react-owl-carousel';
import PostMenu from './PostMenu';

function Posts(props) {
 function commentView(e) {
  let comments = document.querySelectorAll('.comments');
  comments.forEach((comment) => {
   if (e.currentTarget.id === comment.getAttribute('data-id')) {
    comment.classList.toggle('d-none');
   }
  });
 }
 const [currentPage, setCurrentPage] = useState(1);
 const [sizePost, setSizePost] = useState(20);

 const { likePost } = props;
 const [likeState, setLikeState] = useState({});

 const user = props.userAuth;
 useEffect(() => {}, [sizePost, currentPage]);

 function toggleActive(e) {
  if (
   e.currentTarget.firstElementChild.className === 'fa-regular fa-thumbs-up'
  ) {
   e.currentTarget.firstElementChild.classList = 'fa-solid fa-thumbs-up';
  } else {
   e.currentTarget.firstElementChild.classList = 'fa-regular fa-thumbs-up';
  }
 }
 const { posts } = props;
 return (
  <>
   <div className="col-12">
    {posts.map((post) => (
     <div className="post" key={post.id}>
      <div className="post-title row">
       <div className="profile-img-parent">
        <img
         alt={`${post.user.firstname} profile`}
         className="post-profile-img"
         src={
          post.user.profilPicture == null
           ? `../../img/user.png`
           : `${post.user.profilPicture}`
         }
        />
       </div>
       <div className="col-9">
        <p className="user-name">
         {post.animal ? (
          <>
           <Link to={`/animal/${post.animal.name}`}>{post.animal.name}</Link>
           <span>and</span>
          </>
         ) : (
          ''
         )}
         <Link to={`/user/${post.user.username}`}>
          {post.user.firstname} {post.user.lastname}
         </Link>
        </p>
        <p className="create-date">
         <ReactTimeAgo
          date={Date.parse(post.creationDate)}
          timeStyle="twitter"
          locale="az-AZ"
         />
        </p>
        <p className="hasTag">{post.hasTag}</p>
       </div>
       <PostMenu userId={post.user.id} />
       <div className="post-content col-12">{post.content}</div>
      </div>
      <div className="post-body item">
       {post.pictures ? (
        <OwlCarousel className="owl-theme" dots={false} items={1}>
         {post.pictures.map((picture) => (
          <div className="item" key={picture.id}>
           <img className="post-img" src={picture.imageName} />
          </div>
         ))}
        </OwlCarousel>
       ) : (
        ''
       )}
      </div>
      <div className="post-footer">
       <div className="post-result">
        <span className="index like">
         <Link to="/">
          <i className="fa-solid fa-thumbs-up"></i>
          <span className="count">{post.likes.length}</span>
         </Link>
        </span>
        <span className="index comment">
         <Link to="/sds">
          <i className="fa-solid fa-comment"></i>
          <span className="count">{post.comments.length}</span>
         </Link>
        </span>
       </div>
      </div>
      <div className="post-event">
       <div className="col-6 event like">
        <form
         onSubmit={(e) => {
          e.preventDefault();
          likePost(likeState);
         }}>
         <button
          className="btn btn-like"
          onClick={(e) => {
           toggleActive(e);
           let like = true;
           if (
            e.currentTarget.firstElementChild.className ===
            'fa-regular fa-thumbs-up'
           ) {
            document.querySelector('.count').innerText =
             Number(document.querySelector('.count').innerText) - 1;
            like = false;
           } else {
            document.querySelector('.count').innerText =
             Number(document.querySelector('.count').innerText) + 1;
            like = true;
           }
           const userId = user[0].id,
            postId = post.id,
            likeType = 0,
            isLike = like;
           setLikeState({
            ...likeState,
            ...{
             isLike,
             userId,
             postId,
             likeType,
            },
           });
          }}>
          <i
           className={
            post.likes.find((l) => l.postId === post.id)
             ? `fa-solid fa-thumbs-up`
             : `fa-regular fa-thumbs-up`
           }></i>
          Like
         </button>
        </form>
       </div>
       <div className="col-6 event comment" id={post.id} onClick={commentView}>
        <button className="btn btn-comment">
         <i className="fa-regular fa-comment"></i>
         Comment
        </button>
       </div>
      </div>
      <div className="comments d-none" data-id={post.id}>
       <Comment postId={post.id} comments={post.comments} />
      </div>
     </div>
    ))}
   </div>
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  userAuth: state.authReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  likePost: (likeData) => {
   dispatch(likePost(likeData));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
