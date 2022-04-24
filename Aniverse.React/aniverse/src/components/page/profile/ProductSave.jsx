import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getSaveProducts } from '../../../redux/actions/productAction';
import ShopSave from '../aniPage/ShopSave';
const ProductSave = (props) => {
 const { getSaveProductsReq } = props;
 useEffect(() => {
  getSaveProductsReq(1, 10);
 }, []);
 console.log(props);
 return (
  <div className="shop shop-save">
   <div className="shop-list row">
    {props.products.data.map((product, index) => (
     <div className="col-12 col-md-6 shop-col" key={product.id}>
      <a href={product.url} className="shop-card">
       <div className="shop-card-img">
        <Swiper slidesPerView={1}>
         {product.pictures.map((picture) => (
          <SwiperSlide key={picture.id}>
           <div className="shop-img">
            <img alt={product.name} src={picture.imageName} />
           </div>
          </SwiperSlide>
         ))}
        </Swiper>
       </div>
       <div className="shop-card-footer">
        <h3>{product.name}</h3>
        <h4>${product.price}</h4>
       </div>
      </a>
      <ShopSave product={product} />
     </div>
    ))}

    <div></div>
   </div>
  </div>
 );
};

const mapStateToProps = (state) => ({
 products: state.productsReducer,
});

const mapDispatchToProps = (dispatch) => {
 return {
  getSaveProductsReq: (page, size) => {
   dispatch(getSaveProducts(page, size));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSave);
