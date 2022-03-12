import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { archiveStory, deleteStory } from '../../redux/actions/storyAction';

function StoryController(props) {
 const { deleteStoryRequest } = props;
 const { archive } = props;
 const [activeMenu, setActiveMenu] = useState(false);
 return (
  <>
   <button
    onClick={() => {
     setActiveMenu(!activeMenu);
    }}
    className="btn btn-story">
    <i className="fa-solid fa-ellipsis-vertical"></i>
   </button>
   {activeMenu ? (
    <div className="story-menu">
     <ul>
      <li>
       <button
        onClick={() => {
         props.setStory(props.addStory + 1);
         archive(props.storyId);
        }}
        className="btn">
        Archive
        <i className="fa-solid fa-box-open"></i>
       </button>
      </li>
      <li>
       <form>
        <button
         onClick={() => {
          props.setStory(props.addStory + 1);
          deleteStoryRequest(props.storyId);
         }}
         type="button"
         className="btn">
         Delete
         <i className="fa-solid fa-trash"></i>
        </button>
       </form>
      </li>
     </ul>
    </div>
   ) : (
    ''
   )}
  </>
 );
}
const mapStateToProps = (state) => {
 return {
  stories: state.storyFriendReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  deleteStoryRequest: (id) => {
   dispatch(deleteStory(id));
  },
  archive: (id) => {
   dispatch(archiveStory(id));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryController);
