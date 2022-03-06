import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { getAnimalPosts } from '../../redux/actions/postAction';
import ReactTimeAgo from 'react-time-ago';
import OwlCarousel from 'react-owl-carousel';
import { commentCreate } from '../../redux/actions/commentAction';
function AnimalPost(props) {
 const { animalGetPost } = props;
 const animalname = useParams().animalname;
 const { commentUser } = props;
 const [commentState, setcommentState] = useState({});
 const { likePost } = props;
 const [likeState, setLikeState] = useState({});
 const [postState, setPostState] = useState({});
 useEffect(() => {
  setLikeState(animalname);
  animalGetPost(animalname);
 }, []);
 const { posts, userAuth } = props;
 return (
  <>
   {/* {props.posts[0]
    ? posts.map((post) => (
       <div className="row post" key={post.id}>
        <div className="col-8">
         {console.log(props)}
         <div className="post-title">
          <div className="post-profile-img">
           <img
            alt={`${post.animal.name} profile`}
            className="post-profile-pircture"
            src={
             post.animal.profilPicture == null
              ? `../../img/animal.jpg`
              : `${post.animal.profilPicture}`
            }
           />
          </div>
          <div className="post-profile">
           <p className="post-profile-name">
            <span className="profile-name">{post.animal.name}</span>
            with
            <span className="profile-name">{post.user.firstname}</span>
           </p>
           <p className="date">
            <ReactTimeAgo
             date={Date.parse(post.creationDate)}
             locale="en-US"
             timeStyle="round-minute"
            />
           </p>
          </div>
         </div>
         <div className="post-pictures">
          <div className="post-content">{post.content}</div>
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
        </div>
        <div className="post-comment col-4">
         <form
          onSubmit={(e) => {
           e.preventDefault();
           commentUser(commentState);
           document.querySelector('.post-comment-input input').value = '';
          }}
          className="post-comment-profile">
          <div className="comment-profile">
           <div className="post-comment-img">
            <img
             alt={`${userAuth.firstname + userAuth.lastname} profile`}
             className="post-comment-picture"
             src={
              userAuth.profilPicture == null
               ? `../../img/user.png`
               : `${userAuth.profilPicture}`
             }
            />
           </div>
          </div>
          <div className="post-comment-add col-7">
           <div className="post-comment-input">
            <input
             onChange={(e) => {
              const content = e.target.value;
              const postId = post.id;
              setcommentState({
               ...commentState,
               ...{ postId, content },
              });
             }}
             type="text"
             placeholder="Comment add"
            />
           </div>
          </div>
          <div className="btn-add col-3">
           <button type="submit" className="btn btn-primary">
            Send
           </button>
          </div>
         </form>
         {post.comments.map((comment) => (
          <div className="post-comment-profile" key={comment.id}>
           <div className="comment-profile">
            <div className="post-comment-img">
             <img
              alt={`${comment.user.lastname + comment.user.firstname} profile`}
              className="post-comment-picture"
              src={
               comment.user.profilPicture == null
                ? `../../img/user.png`
                : `${comment.user.profilPicture}`
              }
             />
            </div>
           </div>
           <div className="post-comment-contetn">
            <div>
             <p className="comment-profile-name">
              {comment.user.firstname} {comment.user.lastname}
             </p>
             <p className="comment-contetn">{comment.content}</p>
            </div>
            <div>
             <p className="sender-date">
              <ReactTimeAgo
               date={Date.parse(comment.senderDate)}
               locale="en-US"
               timeStyle="twitter"
              />
             </p>
            </div>
           </div>
          </div>
         ))}
        </div>
       </div>
      ))
    : ''} */}
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  posts: state.animalPostReducer,
  userAuth: state.userNavbarReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  animalGetPost: (animalname) => {
   dispatch(getAnimalPosts(animalname));
  },
  commentUser: (comment) => {
   dispatch(commentCreate(comment));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimalPost);
