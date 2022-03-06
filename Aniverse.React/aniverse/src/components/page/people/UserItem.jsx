import React from 'react';
import { Link } from 'react-router-dom';

function UserItem(props) {
 return (
  <>
   {console.log(props)}
   <div className="container user-all">
    <div className="row users-row">
     {props.users.map((user) => (
      <div className="col-3" key={user.id}>
       <Link to={`/user/${user.username}`}>
        <div className="user-card">
         <img
          alt="Profile"
          className="user-profile-img"
          src={
           user.profilPicture == null
            ? `../../img/user.png`
            : `${user.profilPicture}`
          }
         />
         <div className="user-about">
          <p className="user-name">
           {user.firstname} {user.lastname}
          </p>
         </div>
         <div className="user-card-footer">
          <button className="btn btn-light">Add friend</button>
         </div>
        </div>
       </Link>
      </div>
     ))}
    </div>
   </div>
  </>
 );
}
export default UserItem;
