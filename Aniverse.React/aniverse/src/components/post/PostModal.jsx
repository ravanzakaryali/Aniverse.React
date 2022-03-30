import React from 'react';
import { connect } from 'react-redux';
import PostArchiveModal from './PostArchiveModal';
import PostDeleteModal from './PostDeleteModal';
import PostEditModal from './PostEditModal';
import PostRestoreModal from './PostRestoreModal';
function PostModal(props) {
 const { post } = props;
 return (
  <>
   <PostArchiveModal post={post} />
   <PostDeleteModal post={post} />
   <PostEditModal />
   <PostRestoreModal />
  </>
 );
}

const mapStateToProps = (state) => {
 return {
  post: state.postModalReducer,
 };
};
export default connect(mapStateToProps)(PostModal);
