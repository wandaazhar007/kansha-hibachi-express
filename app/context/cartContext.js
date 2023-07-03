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

// export const getProductData = async (id) => {
//   const response = await axios.get(`http://localhost:2000/products`);
//   const responseArray = response.data.result;
//   let productData = responseArray.find(product => product.id === id);
//   if (productData == undefined) {
//     console.log("Product data does not exist for ID: " + id);
//     return undefined;
//   }

//   return productData;
// }

const getProductData = async (id) => {
  const response = await fetch('http://localhost:2000/products').then((result) => {
    // return result
    console.log('count product', result);
  });
  const data = await response.json();
  // console.log(data.result)
  const productData = data.result.find(product => product.id === id);
  // console.log(productData)
  // if (productData == undefined) {
  //   console.log("Product data does not exist for ID: " + id);
  //   return undefined;
  // }

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
      const getData = async (id) => {
        const res = await fetch('http://localhost:2000/products')
          .then(response => response.json())
          .then(response => {
            // console.log(response);
            const data = response.result.find(product => product.id === cartItem.id);
            return data
            // console.log(data)
          })
        // console.log(res);
        // .then(response => console.log(response))

        // const data = await res.json();
        // console.log('res', data.result)
        // const filterProduct = data.result.find(product => product.id === cartItem.id);
        // console.log(filterProduct);
        return res;
        // return filterProduct;
      }
      const productData = getData(cartItem.id).then(response => { return response.json() })

      // const productData = getData(cartItem.id).then((resolve) => {
      //   return resolve.price
      // })
      console.log('total', productData);
      totalCost += (productData.price * cartItem.quantity);
    });
    return totalCost;
  }

  // function getTotalCost() {
  //   let totalCost = 0;
  //   cartProducts.map((cartItem) => {
  //     const productData = getProductData(cartItem.id);
  //     console.log('total', productData);
  //     totalCost += (productData.price * cartItem.quantity);
  //   });
  //   return totalCost;
  // }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
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