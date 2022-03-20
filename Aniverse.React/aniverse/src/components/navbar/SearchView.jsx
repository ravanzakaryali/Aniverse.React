import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SearchView(props) {
 const { users } = props;
 const [state, setState] = useState();
 return (
  <div className="search-parent">
   {users.length ? (
    <div className="row search-row">
     {users.map((user) => (
      <>
       <Link to={`user/${user.username}`}>
        <div className="user">
         {user.firstname} {user.lastname}
        </div>
       </Link>
      </>
     ))}
    </div>
   ) : (
    ''
   )}
  </div>
 );
}
export default SearchView;
