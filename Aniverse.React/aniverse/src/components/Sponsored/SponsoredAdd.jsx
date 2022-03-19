import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function SponsoredAdd(props) {
 const { activeModal, setActiveModal } = props;
 return (
  <>
   <div
    class="modal sponsored-modal fade"
    id="sponsored-modal"
    aria-labelledby="sponsored_modal_label"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
     <div class="modal-content vertical-center">
      <div class="modal-header">
       <h5 class="modal-title" id="sponsored_modal_label">
        Modal title
       </h5>
       <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
       <button type="button" class="btn btn-light" data-bs-dismiss="modal">
        Close
       </button>
       <button type="button" class="btn btn-primary">
        Save
       </button>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}
export default SponsoredAdd;
