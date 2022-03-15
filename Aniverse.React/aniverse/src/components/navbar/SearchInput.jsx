import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getUsersSearch } from '../../redux/actions/userActions';
import { IoIosSearch } from 'react-icons/io';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchView from './SearchView';

function SearchInput(props) {
 const { searchRequest } = props;
 const [search, setSearch] = useState({});
 console.log(props);
 return (
  <>
   <div className="search col-6 col-md-2">
    <form
     onSubmit={(e) => {
      e.preventDefault();
     }}>
     <input
      onChange={(e) => {
       setSearch(e.target.value);
       if (e.target.value !== '') searchRequest(search);
      }}
      type="text"
      placeholder="Search Aniverse"
     />
    </form>
   </div>
   <SearchView users={props.users} setSearch={setSearch} />
  </>
 );
}

const mapStateToProps = (state) => {
 return {
  users: state.seachUsersReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  searchRequest: (search) => {
   dispatch(getUsersSearch(search));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
