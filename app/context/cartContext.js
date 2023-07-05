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
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart_kansha' || '[]'));
  const [cartProducts, setCartProducts] = useState(cartFromLocalStorage || []);

  useEffect(() => {
    localStorage.setItem('cart_kansha', JSON.stringify(cartProducts));
  }, [cartProducts]);

  function getProductQuantity(id) {
    const quantity = cartProducts.find((product) => product.id === id)?.quantity
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id, name, price) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, name: name, price: price, quantity: 1 }]);
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
      // const getData = async (id) => {
      //   return fetch('http://localhost:2000/products')
      //     .then(response => response.json())
      //     .then(response => {
      //       const data = response.result.find(product => product.id === cartItem.id);
      //       return data;
      //     })
      // }
      // const productData = getData().then((resolve) => {
      //   return resolve;
      // });
      // let sum = cartFromLocalStorage.reduce((accumulator, object) => {
      //   return accumulator + price
      // const sum = cartProducts?.reduce((cartItem, product) => cartItem.price * product.quantity, 0)
      // console.log(sum)
    })
    // const number = [5, 5, 10];
    // const filter = number.reduce((accumulator, currentValue) => accumulator + currentValue);
    // console.log('filter', filter)
    // var arr = [{ x: 1 }, { x: 2 }, { x: 4 }, { x: 4 }];
    var arr = [
      {
        "id": 7,
        "name": "Crab Rangoon (4 Pcs)",
        "price": 4.00,
        "quantity": 9
      },
      {
        "id": 8,
        "name": "Egg",
        "price": 10.00,
        "quantity": 3
      }
    ]
    // const cart = JSON.parse(cartFromLocalStorage)
    const cart = cartProducts?.reduce(function (acc, obj) { return acc + obj.price; }, 0);
    console.log(cartProducts);
    // cartFromLocalStorage.map((e) => {
    //   const price = e.price;
    //   console.log('price', price)
    // })
    // console.log(cartItem)
    // totalCost += (productData * cartItem.quantity);
    // totalCost += (3.00 * cartItem.quantity);
    // });
    // const sum = cartProducts?.reduce((sum, product) => product.price * product.quantity, 0)
    // console.log(sum)
    totalCost += cart
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