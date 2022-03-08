import React from 'react';
import { connect } from 'react-redux';

export const BlockUsersButton = (props) => {
 return (
  <>
   <form className="buttons">
    <button className="btn btn-light">Unblock</button>
   </form>
  </>
 );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BlockUsersButton);
