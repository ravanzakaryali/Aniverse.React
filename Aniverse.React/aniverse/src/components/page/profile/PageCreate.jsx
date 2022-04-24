import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { pageCreate } from '../../../redux/actions/pageAction';

function PageCreate(props) {
 const navigate = useNavigate();
 const { pageCreateRequest } = props;
 const [
  pageState = { name: '', pagename: '', category: '', about: '' },
  setPageState,
 ] = useState();
 const [disable, setDisable] = useState(true);

 const handleSubmit = (e) => {
  e.preventDefault();
  pageCreateRequest(pageState);
  navigate(`/page/${pageState.pagename}`);
 };

 const handleChange = (e) => {
  const { name, value } = e.target;
  setPageState({ ...pageState, ...{ [name]: value } });
  formState(pageState);
 };

 const formState = (pageState) => {
  if (
   pageState.name &&
   pageState.pagename &&
   pageState.category &&
   pageState.about
  ) {
   setDisable(false);
  } else {
   setDisable(true);
  }
 };

 return (
  <div>
   <div className="archive">
    <div className="archive-title">Add Page</div>
    <div className="animal animal-create-profile">
     <form onSubmit={handleSubmit} className="form-create">
      <div className="form-item">
       <label className="create-label">Page</label>
       <input name="name" onChange={handleChange} placeholder="Page" />
      </div>
      <div className="form-item">
       <label className="create-label">Pagename</label>
       <input
        name="pagename"
        onChange={handleChange}
        placeholder="Pagename"></input>
      </div>
      <div className="form-item">
       <label className="create-label">About</label>
       <input name="about" onChange={handleChange} placeholder="About"></input>
      </div>
      <div className="form-item">
       <label className="create-label">Category</label>
       <input
        name="category"
        onChange={handleChange}
        placeholder="Catgeory"></input>
      </div>
      <div className="buttons ">
       <button disabled={disable} type="submit" className="btn btn-primary">
        Add Page
       </button>
      </div>
     </form>
    </div>
   </div>
  </div>
 );
}

const mapStateToProps = (state) => {
 return {
  page: state.pageReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  pageCreateRequest: (pageData) => {
   dispatch(pageCreate(pageData));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageCreate);
