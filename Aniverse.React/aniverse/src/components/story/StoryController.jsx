import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
   </button>
   {activeMenu ? (
    <div className="story-menu">
     <ul>
      <li>
       <button
        onClick={() => {
         props.setStory('archive');
         archive(props.storyId);
        }}
        className="btn">
        Archive
        <FontAwesomeIcon className="icon" icon="fa-solid fa-box-open" />
       </button>
      </li>
      <li>
       <form
        onSubmit={(e) => {
         e.preventDefault();
         props.setStory('delete');
         deleteStoryRequest(props.storyId);
        }}>
        <button type="submit" className="btn">
         Delete
         <FontAwesomeIcon icon="fa-solid fa-trash" />
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
