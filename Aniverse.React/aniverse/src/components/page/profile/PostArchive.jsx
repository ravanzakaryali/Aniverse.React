import React from 'react';
import { connect } from 'react-redux';

function PostArchive(props) {
 const { postArhiveRequest } = props;
 console.log(props);
 return <></>;
}
const mapStateToProps = (state) => {
 return {
  posts: state.postArhiveReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  postArhiveRequest: () => {
   dispatch();
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostArchive);
