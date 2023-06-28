'use client'
import { faCartPlus, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const ModalProduct = ({ openModal, closeModal, propSlug }) => {
  if (!openModal) return null;
  const [isLoading, setIsLoading] = useState(true)
  const [nameProduct, setNameProduct] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [urlImage, setUrlImage] = useState('');


  const getProductById = async () => {
    // const response = await axios.get(`http://localhost:2000/products/${propSlug}`);
    const response = await axios.get(`https://kanshaapi.birojasa-sahabat.com/products/${propSlug}`);

    setTimeout(() => {
      setNameProduct(response.data.name);
      setPrice(response.data.price);
      setDesc(response.data.desc);
      setUrlImage(response.data.urlImage);
      setIsLoading(false)
    }, 500);
    // setNameProduct(response.data.name);
    // setPrice(response.data.price);
    // setDesc(response.data.desc);
    // setUrlImage(response.data.urlImage);
    // setIsLoading(false)
    // console.log('get product', response.data)
  }

  useEffect(() => {
    getProductById();
  }, [])
  return (
    <div className="modal-product">
      <div className="box-container">
        {isLoading &&
          <div className="box">
            <div className="close-btn" onClick={closeModal}></div>
            <div className="modal-body">
              <div className="content-image skeleton skeleton-image-modal">
                {/* <Image src={urlImage} alt="sakura sushi" width={500} height={500} /> */}
              </div>
              <h1 className="skeleton skeleton-title-modal"></h1>
              <h1 className="skeleton skeleton-price-modal"></h1>
              {/* <p className="desc-detail-product">{desc}</p> */}
            </div>
            <div className="modal-footer">
              <p className="skeleton skeleton-desc-modal"></p>
              <p className="skeleton skeleton-desc-modal"></p>
              <p className="skeleton skeleton-desc-modal"></p>
              {/* <h1 className="price-detail-product">${price}</h1> */}
              {/* <button className="close-btn-2" onClick={closeModal}>
                <FontAwesomeIcon icon={faClose} className="icon" />
                Close
              </button> */}
              {/* <button className="add-to-cart" onClick={() => handleClick(productData.id)}>
            <FontAwesomeIcon icon={faCartPlus} className="icon" />
            Add To Cart
          </button> */}
            </div>
          </div>
        }
        {!isLoading &&
          <div className="box">
            <div className="close-btn" onClick={closeModal}></div>
            <div className="modal-body">
              <div className="content-image">
                <Image src={urlImage} alt="sakura sushi" width={500} height={500} />
              </div>
              <h1 className="title-detail-product">{nameProduct}</h1>
              <h1 className="price-detail-product">${price}</h1>
              {/* <p className="desc-detail-product">{desc}</p> */}
            </div>
            <div className="modal-footer">
              <p className="desc-detail-product">{desc}</p>
              {/* <h1 className="price-detail-product">${price}</h1> */}
              <button className="close-btn-2" onClick={closeModal}>
                Close
                <FontAwesomeIcon icon={faClose} className="icon" />
              </button>
              {/* <button className="add-to-cart" onClick={() => handleClick(productData.id)}>
              <FontAwesomeIcon icon={faCartPlus} className="icon" />
              Add To Cart
            </button> */}
            </div>
          </div>
        }

      </div>
    </div>
  );
}

export default ModalProduct;