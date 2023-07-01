import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const CartComponent = ({ id, quantity }) => {
  const [menus, setMenus] = useState([]);

  const getMenu = async () => {
    // const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_PRODUCTS}?search_query=${keywordButton}&page=${page}&limit=${limit}`);
    // const response = await axios.get(`https://kanshaapi.birojasa-sahabat.com/products?search_query=${keywordButton}&page=${page}&limit=${limit}`);
    const response = await axios.get(`http://localhost:2000/products?search_query=${keywordButton}&page=${page}&limit=${limit}`);
    setMenus(response.data.result);
  }
  useEffect(() => {
    getMenu();
  }, [])

  const getProductData = (id) => {
    let productData = menus.find(product => product.id === id);
    if (productData == undefined) {
      console.log("Product data does not exist for ID: " + id);
      return undefined;
    }

    return productData;
  }
  const productData = getProductData(id);

  console.log(productData)
  return (
    <div className="box">
      <div className="image">
        <Image src={productData.urlImage} width={100} height={100} alt="images" />
      </div>
      <div className="title">
        <div className="detail">
          <p className="name-product">{productData.name}</p>
          <p className="price-product">$3.50</p>
        </div>
        <div className="button">
          <span>-</span>
          <span>{quantity}</span>
          <span>+</span>
        </div>
      </div>
      <div className="delete">
        <span>$3.50</span>
        <FontAwesomeIcon icon={faTrash} className="icon" />
      </div>
    </div>
  );
}

export default CartComponent;