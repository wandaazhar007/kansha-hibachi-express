'use client'
import { faCartPlus, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const ModalProduct = ({ openModal, closeModal, propId, propName, propPrice }) => {
  if (!openModal) return null;
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingBtn, setIsLoadingBtn] = useState(true);
  const [nameProduct, setNameProduct] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [urlImage, setUrlImage] = useState('');

  const cart = useContext(CartContext);
  // const productsCount = cart.items?.reduce((sum, product) => sum + product.quantity, 0);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:2000/products/${propId}`);
    // const response = await axios.get(`https://kanshaapi.birojasa-sahabat.com/products/${propSlug}`);

    setTimeout(() => {
      setNameProduct(response.data.name);
      setPrice(response.data.price);
      setDesc(response.data.desc);
      setUrlImage(response.data.urlImage);
      setIsLoading(false)
    }, 500);
  }

  const notify = () => {
    toast.success('Item has been added in the cart!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  useEffect(() => {
    getProductById();
  }, [])

  const handleClick = (id, name, price) => {
    cart.addOneToCart(id, name, price);
    setIsLoadingBtn(false);
    setTimeout(() => {
      setIsLoadingBtn(true);
      // closeModal()
    }, 2000);
    notify();
  }
  return (
    <>
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
              {/* <div className="close-btn" onClick={closeModal}></div> */}
              <div className="modal-body">
                <div className="content-image">
                  <Image src={urlImage} alt="sakura sushi" width={500} height={500} />
                </div>
                <h1 className="title-detail-product">{nameProduct}</h1>
                <h1 className="price-detail-product">${price}</h1>
                {/* <p className="desc-detail-product">{desc}</p> */}
                <p className="desc-detail-product">{desc}</p>
              </div>
              <div className="modal-footer">
                <button className="add-to-cart" onClick={() => handleClick(propId, propName, propPrice)}>
                  {isLoadingBtn ? (
                    <>
                      <FontAwesomeIcon icon={faCartPlus} className="icon" />
                      Add To Cart
                    </>
                  ) : 'loading..'}
                </button>
                <button className="close-btn-2" onClick={closeModal}>
                  <FontAwesomeIcon icon={faClose} className="icon" />
                </button>

              </div>
            </div>
          }

        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default ModalProduct;