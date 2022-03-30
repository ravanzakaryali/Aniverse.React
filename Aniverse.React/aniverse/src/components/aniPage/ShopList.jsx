import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineBook, AiFillBook } from 'react-icons/ai';

function ShopList(props) {
 const [active, setActive] = useState(false);
 const { getShop, prodcutSaveRequest } = props;
 const { id, isSave } = props.page.data;
 const [postProduct, setProductSave] = useState({});

 const productSaveSubmit = (e) => {
  e.preventDefault();
  prodcutSaveRequest(postProduct);
 };

 useEffect(() => {
  if (id) {
   getShop(1, 10, id);
  }
  if (isSave) {
   setActive(!active);
  }
 }, []);
 console.log(props);
 return (
  <div className="shop-list row">
   {props.products.data.map((product, index) => (
    <div className="col-6 col-md-3" key={product.id}>
     <a href={product.url} className="shop-card">
      <div className="shop-card-img">
       <Swiper slidesPerView={1}>
        {product.pictures.map((picture) => (
         <SwiperSlide key={product.id}>
          <div className="shop-img">
           <img alt={product.name} src={picture.imageName} />
          </div>
         </SwiperSlide>
        ))}
       </Swiper>
       <div className="overlay">
        <button
         onClick={() => {
          setProductSave({ productId: product.id, isSave: active });
          setActive(!active);
         }}
         className="btn">
         {active ? (
          <AiFillBook className="icon" />
         ) : (
          <AiOutlineBook className="icon" />
         )}
        </button>
       </div>
      </div>
      <div className="shop-card-footer">
       <h3>{product.name}</h3>
       <h4>${product.price}</h4>
      </div>
     </a>
    </div>
   ))}

   <div></div>
  </div>
 );
}

const mapStateToProps = (state) => {
 return {
  products: state.productsReducer,
  page: state.pageReducer,
 };
};
const mapDispatchToProps = (dispatch) => {
 return {
  getShop: (page, size, id) => {
   dispatch(getProducts(page, size, id));
  },
  prodcutSaveRequest: (product) => {
   dispatch();
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);
