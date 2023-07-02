'use client'
import { createContext, useEffect, useState } from "react";
import axios from "axios";

// export function getProductData(id) {
//   const [products, setProducts] = useState([]);
//   const response = axios.get(`http://localhost:2000/products`);
//   console.log(response.data.result)
//   setProducts(response.data.result)
//   let productData = products.find(product => product.id === id);
//   if (productData == undefined) {
//     console.log("Product data does not exist for ID: " + id);
//     return undefined;
//   }

//   return productData;
// }

export const getProductData = async (id) => {
  const response = await axios.get(`http://localhost:2000/products`);
  const responseArray = response.data.result;
  // console.log('this is products', responseArray);
  let productData = responseArray.find(product => product.id === id);
  // console.log('data', productData)
  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => { },
  addOneToCart: () => { },
  removeOneFromCart: () => { },
  deleteFromCart: () => { },
  getTotalCost: () => { }
});



export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem('cart_kansha', JSON.stringify(cartProducts));
  // }, [cartProducts]);

  // if (typeof window !== 'undefined') {
  //   var cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || '[]';
  //   var a = [].concat(cartFromLocalStorage);
  //   var b = [];
  //   var c = b.push(cartFromLocalStorage)
  // } else {
  //   false
  // }

  function getProductQuantity(id) {
    const quantity = cartProducts.find((product) => product.id === id)?.quantity
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      setCartProducts(cartProducts.map((product) => product.id === id ? { ...product, quantity: product.quantity + 1 } : product));
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map(
          product =>
            product.id === id                                // if condition
              ? { ...product, quantity: product.quantity - 1 } // if statement is true
              : product                                        // if statement is false
        )
      )
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) => cartProducts.filter((currentProduct) => {
      return currentProduct.id != id;
    }))
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      console.log('total', productData);
      totalCost += (productData.price * cartItem.quantity);
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    // removeOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )

}

export default CartProvider;