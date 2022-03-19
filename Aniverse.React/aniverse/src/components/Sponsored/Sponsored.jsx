import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import SponsoredAdd from './SponsoredAdd';

function Sponsored(props) {
 return (
  <>
   <div className="sponsored">
    <div className="sponsored-title-parent">
     <h3 className="sponsored-title">Sponsored</h3>
     <button
      className="btn"
      data-bs-toggle="modal"
      data-bs-target="#sponsored-modal">
      <FontAwesomeIcon icon="fa-solid fa-plus" />
     </button>
    </div>
    <div className="sponsored-contetn">
     <div className="sponsored-img col-5">
      <img
       alt="sponsored"
       src="https://www.eventsforce.com/wp-content/uploads/2019/05/7-steps-to-successful-event-sponsorship-768x512.jpg"
      />
     </div>
     <div className="sponsored-text col-7">
      <p className="sponsored-content-main">
       Lorem ipsum dolor sit amet consectetur.
      </p>
      <p className="compony-name">WebSite.com</p>
     </div>
    </div>
    <div className="sponsored-contetn">
     <div className="sponsored-img col-5">
      <img
       alt="sponsored"
       src="https://i0.wp.com/salifex.com/wp-content/uploads/2019/02/heinz_ketchup_2.jpg?fit=660%2C900&ssl=1"
      />
     </div>
     <div className="sponsored-text col-7">
      <p className="sponsored-content-main">
       Lorem ipsum dolor sit amet consectetur.
      </p>
      <p className="compony-name">WebSite.com</p>
     </div>
    </div>
   </div>
  </>
 );
}

export default Sponsored;
