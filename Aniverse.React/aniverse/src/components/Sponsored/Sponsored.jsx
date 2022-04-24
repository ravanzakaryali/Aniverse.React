import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ReactTimeAgo from 'react-time-ago';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineBook } from 'react-icons/ai';
import SponsoredAdd from './SponsoredAdd';
import ShopSave from '../page/aniPage/ShopSave';

function Sponsored(props) {
 return (
  <>
   <div className="sponsored">
    <div className="sponsored-title-parent">
     <h3 className="sponsored-title">Shop</h3>
    </div>
    {props.products.data.map((product) => (
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
       </a>
       <ShopSave product={product} />
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
    ))}
   </div>
  </>
 );
}

export default Sponsored;
