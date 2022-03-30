import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ReactTimeAgo from 'react-time-ago';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineBook } from 'react-icons/ai';
import SponsoredAdd from './SponsoredAdd';

function Sponsored(props) {
 return (
  <>
   <div className="sponsored">
    <div className="sponsored-title-parent">
     <h3 className="sponsored-title">Shop</h3>
     <button
      className="btn"
      data-bs-toggle="modal"
      data-bs-target="#sponsored-modal">
      <FontAwesomeIcon icon="fa-solid fa-plus" />
     </button>
    </div>
    {props.products.data.map((product) => (
     <>
      <div className="sponsored-content" key={product.id}>
       <div className="sponsored-img col-6">
        <a href={product.url}>
         <Swiper
          slidesPerView={1}
          autoplay={{
           delay: 5000,
           pauseOnMouseEnter: false,
           disableOnInteraction: false,
           stopOnLastSlide: false,
           waitForTransition: false,
          }}>
          {product.pictures.map((picture) => (
           <SwiperSlide key={picture.id}>
            <div className="shop-img">
             <img alt={product.name} src={picture.imageName} />
            </div>
           </SwiperSlide>
          ))}
         </Swiper>
         <div className="overlay">
          <button className="btn">
           <AiOutlineBook className="icon" />
          </button>
         </div>
        </a>
       </div>
       <div className="sponsored-text col-6">
        <p className="sponsored-content-main">{product.name}</p>
        <p className="compony-name">${product.price}</p>
        <p>
         <ReactTimeAgo
          date={Date.parse(product.creationDate)}
          timeStyle="twitter"
          locale="az-AZ"
         />
        </p>
       </div>
      </div>
     </>
    ))}
   </div>
  </>
 );
}

export default Sponsored;
