'use client'
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export function getProductData(id) {
  let productData = axios.get(`http://localhost:2000/products`);
  if (productData === undefined) {
    console.log("Product data doest not exist for ID" + id);
    return undefined;
  }

  return productData;
}

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

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

  function removeOneToCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) => product.id === id ? { ...product, quantity: 1 } : product)
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
      totalCost += (productData.price * cartItem.quantity);
    });
    return totalCost;
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneToCart,
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