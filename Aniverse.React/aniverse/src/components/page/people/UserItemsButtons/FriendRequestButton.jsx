import React from 'react';
import { connect } from 'react-redux';

const FriendRequestButton = (props) => {
 return (
  <>
   <form className="buttons">
    <button className="btn btn-primary">Confirm</button>
    <button className="btn btn-light">Remove</button>
   </form>
  </>
 );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
 mapStateToProps,
 mapDispatchToProps,
)(FriendRequestButton);
