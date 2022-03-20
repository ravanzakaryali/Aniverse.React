import React from 'react';

function PageCreateModal() {
 return (
  <>
   <div
    className="modal fade"
    id="pageCreate"
    aria-labelledby="pageCreateLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
     <div className="modal-content">
      <div className="modal-header">
       <h5 className="modal-title" id="pageCreateLabel">
        Modal title
       </h5>
       <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <form className="form-page-create">
        <div className="form-auth">
         <input type="text" />
        </div>
       </form>
      </div>
      <div className="modal-footer">
       <button type="button" className="btn btn-light" data-bs-dismiss="modal">
        Close
       </button>
       <button type="button" className="btn btn-primary">
        Create
       </button>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}
export default PageCreateModal;
