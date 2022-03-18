import React from 'react';
import { connect } from 'react-redux';

function Animals() {
 return <div>Animals</div>;
}
const mapStateToProps = (state) => {
 return {
  animals: state.storiesReducer,
 };
};

const mapDispatchToProps = (dispatch) => {
 return {
  postAllRequest: () => {
   dispatch();
  },
  getAllStories: () => {
   dispatch();
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(Animals);
