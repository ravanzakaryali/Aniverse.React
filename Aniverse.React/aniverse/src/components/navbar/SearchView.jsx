import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SearchView(props) {
 const { users } = props;
 const [state, setState] = useState();
 return (
  <>
   {users.length ? (
    <div className="row search-row">
     {users.map((user) => (
      <>
       <Link to={`user/${user.username}`}>
        <div className="user">
         <div className="user-image">
          <img alt="User profile" src="" />
         </div>
         {user.firstname} {user.lastname}
        </div>
       </Link>
      </>
     ))}
    </div>
   ) : (
    ''
   )}
  </>
 );
}
export default SearchView;
