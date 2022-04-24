import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { AiFillBook, AiOutlineBook } from 'react-icons/ai';
import {
 saveProduct,
 unSaveProduct,
} from '../../../redux/actions/productAction';

export const ShopSave = (props) => {
 const [active, setActive] = useState(false);
 const { prodcutSaveRequest, prodcutUnSaveRequest } = props;
 const { product } = props;

 const productSaveSubmit = (e) => {
  e.preventDefault();
  if (active) {
   prodcutSaveRequest(product.id);
  } else {
   prodcutUnSaveRequest(product.id);
  }
 };

 useEffect(() => {
  if (product.isSave) {
   setActive(!active);
  }
 }, []);
 return (
  <>
   <form className="overlay" onSubmit={productSaveSubmit}>
    <button
     type="submit"
     onClick={() => {
      setActive(!active);
     }}
     className="btn">
     {active ? (
      <AiFillBook className="icon" />
     ) : (
      <AiOutlineBook className="icon" />
     )}
    </button>
   </form>
  </>
 );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
 return {
  prodcutSaveRequest: (id) => {
   dispatch(saveProduct(id));
  },
  prodcutUnSaveRequest: (id) => {
   dispatch(unSaveProduct(id));
  },
 };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopSave);
