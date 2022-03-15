import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';

export const BlockUsersButton = (props) => {
 return (
  <>
   <form className="buttons">
    <button className="btn btn-light">
     <FontAwesomeIcon icon="fa-solid fa-user-minus" />
     Unblock
    </button>
   </form>
  </>
 );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BlockUsersButton);
