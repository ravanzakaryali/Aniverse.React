import React from 'react';
import { connect } from 'react-redux';

export const FriendsButton = (props) => {
 return (
  <>
   <form className="buttons">
    <button className="btn btn-light">Delete Friends</button>
   </form>
  </>
 );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsButton);
