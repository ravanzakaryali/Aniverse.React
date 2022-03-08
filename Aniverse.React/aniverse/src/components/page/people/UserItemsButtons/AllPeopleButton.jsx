import React from 'react';
import { connect } from 'react-redux';

export const AllPeopleButton = (props) => {
 return (
  <>
   <form className="buttons">
    <button className="btn btn-light">Add Friends</button>
   </form>
  </>
 );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AllPeopleButton);
