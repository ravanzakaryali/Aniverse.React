import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postStory } from '../../redux/actions/storyAction'

function StoryModal(props) {
    const { story } = props;
    
    const [storyState, setStoryState] = useState({});
    const formData = new FormData();

    return (
        <div className="modal" id="exampleModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Story</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            formData.append("storyFile", storyState.storyFile);
                            story(formData);
                            document.getElementById('cancel').click();
                        }}>
                            <img className='story-add-image' id='storyAdd' src={storyState.storyFileName == null ? "https://wallpaperaccess.com/full/2213424.jpg" : `${storyState.storyFileName}`} />
                            <input onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    let uploadFile = e.target.files[0];
                                    if (uploadFile.type.includes("image")) {
                                        const reader = new FileReader();
                                        reader.onload = f => {
                                            setStoryState({
                                                ...storyState,
                                                storyFile: uploadFile,
                                            })
                                        }
                                        reader.readAsDataURL(uploadFile);
                                        const file = e.target.value
                                        setStoryState({ ...storyState, ...{ file } })
                                    }
                                }

                            }
                            } type="file" id='fileUpload' className='d-none' />
                            <span className='add-story-plus'>
                                <i className="fa-solid fa-plus"></i>
                            </span>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id='cancel'>Cancel</button>
                                <button type="submit" className="btn btn-primary">Add story</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        story: state.storyModal,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        story: (formData) => {
            dispatch(postStory(formData));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryModal);
