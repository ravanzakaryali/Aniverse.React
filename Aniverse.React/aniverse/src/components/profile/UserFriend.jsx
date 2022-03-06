import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function UserFriend(props) {
 const { userFriend } = props;
 return (
  <>
   <div className="row user-friend">
    {userFriend.length > 0 ? (
     <>
      {userFriend.map((friend) => (
       <div className="col-4" key={friend.id}>
        <a href={`/user/${friend.friend.username}`}>
         <div className="friend-card">
          <img
           className="friends-profile"
           src={
            friend.friend.profilPicture == null
             ? `../../img/user.png`
             : `${friend.profilPicture}`
           }
          />
          <p className="friend-name">
           {friend.friend.firstname} {friend.friend.lastname}
          </p>
          <button className="btn btn-light">
           <i className="fa-solid fa-ellipsis"></i>
          </button>
         </div>
        </a>
       </div>
      ))}
     </>
    ) : (
     <>
      <Link to="/people" className="new-friend-text">
       Find new friends
      </Link>
     </>
    )}
   </div>
  </>
 );
}

function mapStateToProps(state) {
 return {
  userFriend: state.friendReducer,
 };
}

export default connect(mapStateToProps)(UserFriend);
