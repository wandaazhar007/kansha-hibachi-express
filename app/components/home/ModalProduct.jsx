import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const ModalProduct = ({ openModal, closeModal, propSlug }) => {
  if (!openModal) return null;
  const [nameProduct, setNameProduct] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [urlImage, setUrlImage] = useState('');

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:2000/products/${propSlug}`);
    setNameProduct(response.data.name);
    setPrice(response.data.price);
    setDesc(response.data.desc);
    setUrlImage(response.data.urlImage);
    console.log('get product', response.data)
  }

  useEffect(() => {
    getProductById();
  }, [])
  return (
    <div className="modal-product">
      <div className="box-container">
        <div className="box">
          <div className="close-btn" onClick={closeModal}></div>
          <div className="modal-body">

            <div className="content-image">
              <Image src={urlImage} alt="sakura sushi" width={500} height={500} />
            </div>
            <h1 className="title-detail-product">{nameProduct}</h1>
            <p className="desc-detail-product">{desc}</p>
          </div>
          <div className="modal-footer">
            <h1 className="price-detail-product">${price}</h1>
            <button className="add-to-cart" onClick={() => handleClick(productData.id)}>
              <FontAwesomeIcon icon={faCartPlus} className="icon" />
              Add To Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ModalProduct;