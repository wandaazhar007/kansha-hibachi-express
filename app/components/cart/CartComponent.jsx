import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext, getProductData } from "@/app/context/cartContext";

const CartComponent = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id)

  console.log(productData);
  //  const getProductData = async (id) => {
  //     const response = await axios.get(`http://localhost:2000/products`);
  //     const responseArray = response.data.result;
  //     let productData = responseArray.find(product => product.id === id);
  //     console.log('data', productData)
  //     if (productData == undefined) {
  //       console.log("Product data does not exist for ID: " + id);
  //       return undefined;
  //     }

  //     return productData;
  //   }


  return (
    <div className="box">
      <div className="image">
        <Image src="" width={100} height={100} alt="images" />
      </div>
      <div className="title">
        <div className="detail">
          <p className="name-product">Name: {productData.id}</p>
          <p className="price-product">$3.50</p>
        </div>
        <div className="button">
          <span onClick={() => cart.removeOneFromCart(id)}>-</span>
          <span>{quantity}</span>
          <span onClick={() => cart.addOneToCart(id)}>+</span>
        </div>
      </div>
      <div className="delete">
        <span>$3.50</span>
        <FontAwesomeIcon icon={faTrash} className="icon" onClick={() => cart.deleteFromCart(id)} />
      </div>
    </div>
  );
}

export default CartComponent;