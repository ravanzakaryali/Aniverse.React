import React from 'react';
import PostAdd from '../../post/PostAdd';

function PostCreate() {
 return (
  <div>
   <div className="archive">
    <div className="archive-title">Add Post</div>
    <div className="animal animal-create-profile">
     <PostAdd />
    </div>
   </div>
  </div>
 );
}
export default PostCreate;
