'use client'
import { useState, useEffect, useContext } from "react";
import { faArrowLeft, faClock, faMapLocation, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import CartComponent from "../components/cart/CartComponent";
import { CartContext } from "../context/cartContext";

const CartPage = () => {
  const cart = useContext(CartContext);
  const productsCount = cart.items?.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <section className="cart-page">
      <div className="container">
        <div className="header">
          <div className="cart-header-left">
            <Link href="/">
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
              <span>Continue Shopping</span>
            </Link>
          </div>
          {/* <div className="cart-header-right">
            <Image src="/images/logo-kansha-header.png" width={100} height={50} alt="logo kansha hibachi" />
          </div> */}
        </div>
        <div className="contents">
          <div className="col-left">
            <h1 className="title">Your Cart</h1>
            <p className="total-order">Total Order {productsCount} items</p>
            <div className="list-items">
              {cart.items.map((currentProduct, idx) => (
                <CartComponent key={idx} id={currentProduct.id} quantity={currentProduct.quantity} />
              ))}
            </div>
          </div>


          {/* <div className="box">
                <div className="image">
                  <Image src="/images/products/menu2_img_1.jpg" width={100} height={100} alt="images" />
                </div>
                <div className="title">
                  <div className="detail">
                    <p className="name-product">Alborcore Tuna</p>
                    <p className="price-product">$3.50</p>
                  </div>
                  <div className="button">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                  </div>
                </div>
                <div className="delete">
                  <span>$3.50</span>
                  <FontAwesomeIcon icon={faTrash} className="icon" />
                </div>
              </div> */}

          <div className="col-right">
            <div className="pickup-location">
              <div className="header-pickup-location">
                <h1>HOW TO GET IT</h1>
                {/* <p>edit</p> */}
              </div>
              <div className="body-address">
                <div className="box-address">
                  <FontAwesomeIcon icon={faMapLocation} className="icon" />
                  Pickup: 26425 Novi Road Suite C
                </div>
                <div className="box-address">
                  <FontAwesomeIcon icon={faClock} className="icon" />
                  Today at 6:10 PM
                </div>
              </div>
            </div>
            <div className="add-tip">
              <h1>ADD A TIP</h1>
              <div className="boxes">
                <button className="box">
                  <h1>10%</h1>
                  <h1>$0.70</h1>
                </button>
                <button className="box">
                  <h1>15%</h1>
                  <h1>$1.50</h1>
                </button>
                <button className="box active">
                  <h1>20%</h1>
                  <h1>$2.50</h1>
                </button>
                <button className="box">
                  <h1>Other</h1>
                </button>
              </div>
            </div>
            <div className="summary">
              <div className="box-summary">
                <p>Subtotal</p>
                <p>${cart.getTotalCost().toFixed(2)}</p>
              </div>
              <div className="box-summary">
                <p>Estimated taxes (MI Sales Tax)</p>
                <p>$0.42</p>
              </div>
              <div className="box-summary">
                <p>Tip</p>
                <p>$0.00</p>
              </div>
              <div className="box-summary">
                <p>Total</p>
                <p>$</p>
              </div>
              <div className="info-summary">Additional taxes and fees will be calculated at checkout
              </div>
              <button>Continue Payment</button>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-one">
            {/* <Image className="image" src="/images/logos/amex.svg" width={20} height={20} alt="apple pay kansha hibachi" /> */}

            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" fillRule="evenodd" fill="#6772e5"><path d="M101.547 30.94c0-5.885-2.85-10.53-8.3-10.53-5.47 0-8.782 4.644-8.782 10.483 0 6.92 3.908 10.414 9.517 10.414 2.736 0 4.805-.62 6.368-1.494v-4.598c-1.563.782-3.356 1.264-5.632 1.264-2.23 0-4.207-.782-4.46-3.494h11.24c0-.3.046-1.494.046-2.046zM90.2 28.757c0-2.598 1.586-3.678 3.035-3.678 1.402 0 2.897 1.08 2.897 3.678zm-14.597-8.345c-2.253 0-3.7 1.057-4.506 1.793l-.3-1.425H65.73v26.805l5.747-1.218.023-6.506c.828.598 2.046 1.448 4.07 1.448 4.115 0 7.862-3.3 7.862-10.598-.023-6.667-3.816-10.3-7.84-10.3zm-1.38 15.84c-1.356 0-2.16-.483-2.713-1.08l-.023-8.53c.598-.667 1.425-1.126 2.736-1.126 2.092 0 3.54 2.345 3.54 5.356 0 3.08-1.425 5.38-3.54 5.38zm-16.4-17.196l5.77-1.24V13.15l-5.77 1.218zm0 1.747h5.77v20.115h-5.77zm-6.185 1.7l-.368-1.7h-4.966V40.92h5.747V27.286c1.356-1.77 3.655-1.448 4.368-1.195v-5.287c-.736-.276-3.425-.782-4.782 1.7zm-11.494-6.7L34.535 17l-.023 18.414c0 3.402 2.552 5.908 5.954 5.908 1.885 0 3.264-.345 4.023-.76v-4.667c-.736.3-4.368 1.356-4.368-2.046V25.7h4.368v-4.897h-4.37zm-15.54 10.828c0-.897.736-1.24 1.954-1.24a12.85 12.85 0 0 1 5.7 1.47V21.47c-1.908-.76-3.793-1.057-5.7-1.057-4.667 0-7.77 2.437-7.77 6.506 0 6.345 8.736 5.333 8.736 8.07 0 1.057-.92 1.402-2.207 1.402-1.908 0-4.345-.782-6.276-1.84v5.47c2.138.92 4.3 1.3 6.276 1.3 4.782 0 8.07-2.368 8.07-6.483-.023-6.85-8.782-5.632-8.782-8.207z" /></svg>
            <p>Secure checkout with Stripe</p>
          </div>
          <div className="footer-two">

            <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3C0 1.79086 1.79086 0 4 0H30C32.2091 0 34 1.79086 34 4V20C34 22.2091 32.2091 24 30 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="white" />
              <path d="M4 1H30V-1H4V1ZM33 4V20H35V4H33ZM30 23H4V25H30V23ZM1 20V4H-1V20H1ZM4 23C2.34315 23 1 21.6569 1 20H-1C-1 22.7614 1.23858 25 4 25V23ZM33 20C33 21.6569 31.6569 23 30 23V25C32.7614 25 35 22.7614 35 20H33ZM30 1C31.6569 1 33 2.34315 33 4H35C35 1.23858 32.7614 -1 30 -1V1ZM4 -1C1.23858 -1 -1 1.23858 -1 4H1C1 2.34315 2.34315 1 4 1V-1Z" fill="#EAEAEA" />
              <path fillRule="evenodd" clipRule="evenodd" d="M9.44921 8.34316C9.16382 8.69506 8.70721 8.97261 8.2506 8.93296C8.19353 8.45715 8.41707 7.95161 8.67867 7.63936C8.96406 7.27755 9.46348 7.01983 9.86777 7C9.91533 7.49563 9.72983 7.98135 9.44921 8.34316ZM9.86297 9.02712C9.46071 9.003 9.09366 9.15319 8.79718 9.2745C8.60639 9.35256 8.44483 9.41867 8.32191 9.41867C8.18397 9.41867 8.01574 9.34903 7.82685 9.27084L7.82685 9.27084C7.57935 9.16838 7.29638 9.05124 6.99964 9.05686C6.31948 9.06677 5.68688 9.46823 5.33967 10.1076C4.62621 11.3863 5.15417 13.2796 5.84384 14.3205C6.18155 14.8359 6.58584 15.4009 7.11855 15.3811C7.35291 15.3719 7.5215 15.2973 7.69597 15.2202C7.89683 15.1314 8.10549 15.0391 8.43131 15.0391C8.74582 15.0391 8.94536 15.129 9.1369 15.2152C9.31903 15.2973 9.49393 15.376 9.75358 15.3712C10.3053 15.3613 10.6525 14.8557 10.9902 14.3403C11.3547 13.7871 11.5148 13.2471 11.5391 13.1652L11.542 13.1557C11.5414 13.1551 11.5369 13.153 11.5289 13.1492C11.4071 13.0911 10.476 12.6469 10.467 11.4557C10.4581 10.4559 11.2056 9.94935 11.3233 9.86961L11.3233 9.8696C11.3304 9.86476 11.3353 9.86149 11.3374 9.85978C10.8618 9.12625 10.1198 9.04695 9.86297 9.02712ZM13.6824 15.3167V7.5898H16.4649C17.9013 7.5898 18.9049 8.62071 18.9049 10.1274C18.9049 11.6341 17.8822 12.675 16.4268 12.675H14.8334V15.3167H13.6824ZM14.8333 8.60088H16.1603C17.1592 8.60088 17.7299 9.15599 17.7299 10.1324C17.7299 11.1088 17.1592 11.6688 16.1556 11.6688H14.8333V8.60088ZM22.7053 14.3898C22.4009 14.9945 21.7302 15.3761 21.0072 15.3761C19.9371 15.3761 19.1903 14.712 19.1903 13.7108C19.1903 12.7196 19.9133 12.1496 21.2498 12.0653L22.6862 11.9761V11.5499C22.6862 10.9204 22.2915 10.5784 21.5875 10.5784C21.0072 10.5784 20.5839 10.8907 20.4983 11.3665H19.4614C19.4947 10.3653 20.3984 9.63675 21.6208 9.63675C22.9383 9.63675 23.7945 10.3554 23.7945 11.4706V15.3167H22.729V14.3898H22.7053ZM21.3163 14.4592C20.7027 14.4592 20.3127 14.1519 20.3127 13.6811C20.3127 13.1954 20.6885 12.9129 21.4067 12.8683L22.6861 12.784V13.2202C22.6861 13.9438 22.0964 14.4592 21.3163 14.4592ZM27.3284 15.619C26.867 16.9721 26.3391 17.4181 25.2166 17.4181C25.131 17.4181 24.8456 17.4082 24.779 17.3884V16.4616C24.8503 16.4715 25.0263 16.4814 25.1167 16.4814C25.6256 16.4814 25.911 16.2584 26.087 15.6785L26.1916 15.3365L24.2415 9.7111H25.4449L26.8004 14.2759H26.8242L28.1798 9.7111H29.3499L27.3284 15.619Z" fill="black" />
            </svg>


            <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4C0 1.79086 1.79086 0 4 0H30C32.2091 0 34 1.79086 34 4V20C34 22.2091 32.2091 24 30 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="white" />
              <path d="M4 1H30V-1H4V1ZM33 4V20H35V4H33ZM30 23H4V25H30V23ZM1 20V4H-1V20H1ZM4 23C2.34315 23 1 21.6569 1 20H-1C-1 22.7614 1.23858 25 4 25V23ZM33 20C33 21.6569 31.6569 23 30 23V25C32.7614 25 35 22.7614 35 20H33ZM30 1C31.6569 1 33 2.34315 33 4H35C35 1.23858 32.7614 -1 30 -1V1ZM4 -1C1.23858 -1 -1 1.23858 -1 4H1C1 2.34315 2.34315 1 4 1V-1Z" fill="#EAEAEA" />
              <path fillRule="evenodd" clipRule="evenodd" d="M16.0579 15.5278V12.5932H17.5725C18.1931 12.5932 18.717 12.3852 19.1441 11.975L19.2466 11.8711C20.0266 11.0219 19.9754 9.69896 19.1441 8.91331C18.7284 8.49737 18.159 8.27207 17.5725 8.28363H15.1411V15.5278H16.0579ZM16.058 11.7035V9.17321H17.5956C17.9259 9.17321 18.2391 9.3003 18.4726 9.53137C18.9681 10.0166 18.9795 10.8254 18.5011 11.328C18.2676 11.5764 17.9373 11.715 17.5956 11.7035H16.058ZM23.5228 10.9583C23.1299 10.5944 22.5947 10.4095 21.9171 10.4095C21.0459 10.4095 20.3911 10.733 19.9583 11.3742L20.7669 11.8884C21.063 11.4493 21.4673 11.2298 21.9797 11.2298C22.3043 11.2298 22.6175 11.3511 22.8623 11.5706C23.1015 11.7786 23.2381 12.079 23.2381 12.3967V12.6105C22.8851 12.4141 22.441 12.3101 21.8943 12.3101C21.2566 12.3101 20.7441 12.4603 20.3626 12.7665C19.9811 13.0726 19.7875 13.477 19.7875 13.9912C19.7761 14.4591 19.9754 14.9039 20.3285 15.2043C20.6872 15.5278 21.1427 15.6896 21.6779 15.6896C22.31 15.6896 22.8111 15.4065 23.1926 14.8404H23.2324V15.5278H24.1093V12.4718C24.1093 11.8306 23.9157 11.3222 23.5228 10.9583ZM21.0347 14.6151C20.8467 14.4764 20.7328 14.2511 20.7328 14.0085C20.7328 13.737 20.8581 13.5117 21.103 13.3326C21.3536 13.1535 21.6668 13.0611 22.037 13.0611C22.5495 13.0553 22.9482 13.1709 23.2329 13.4019C23.2329 13.7948 23.0792 14.1356 22.7773 14.4244C22.504 14.7017 22.1338 14.8577 21.7465 14.8577C21.4903 14.8635 21.2397 14.7768 21.0347 14.6151ZM26.0795 17.7057L29.1429 10.5712H28.1464L26.7286 14.1298H26.7115L25.2595 10.5712H24.2631L26.2731 15.2101L25.1343 17.7057H26.0795Z" fill="#3C4043" />
              <path d="M12.8929 11.9579C12.8929 11.6749 12.8701 11.3918 12.8245 11.1145H8.95825V12.7147H11.1733C11.0821 13.2288 10.7861 13.691 10.3533 13.9798V15.0197H11.6743C12.4487 14.2976 12.8929 13.2288 12.8929 11.9579Z" fill="#4285F4" />
              <path d="M8.95842 16.0247C10.0631 16.0247 10.9969 15.655 11.6745 15.0196L10.3535 13.9797C9.98335 14.2339 9.51074 14.3783 8.95842 14.3783C7.88793 14.3783 6.98257 13.6447 6.65801 12.6626H5.29712V13.7371C5.9918 15.1409 7.40962 16.0247 8.95842 16.0247Z" fill="#34A853" />
              <path d="M6.65822 12.6626C6.48737 12.1485 6.48737 11.5882 6.65822 11.0682V9.99951H5.29712C4.71053 11.1722 4.71053 12.5587 5.29712 13.7314L6.65822 12.6626Z" fill="#FBBC04" />
              <path d="M8.95842 9.35247C9.54491 9.34092 10.1086 9.56621 10.53 9.97637L11.703 8.78634C10.957 8.08156 9.97766 7.69451 8.95842 7.70606C7.40962 7.70606 5.9918 8.5957 5.29712 9.99948L6.65801 11.074C6.98257 10.0861 7.88793 9.35247 8.95842 9.35247Z" fill="#EA4335" />
            </svg>


            <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4C0 1.79086 1.79086 0 4 0H30C32.2091 0 34 1.79086 34 4V20C34 22.2091 32.2091 24 30 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="white" />
              <path d="M4 1H30V-1H4V1ZM33 4V20H35V4H33ZM30 23H4V25H30V23ZM1 20V4H-1V20H1ZM4 23C2.34315 23 1 21.6569 1 20H-1C-1 22.7614 1.23858 25 4 25V23ZM33 20C33 21.6569 31.6569 23 30 23V25C32.7614 25 35 22.7614 35 20H33ZM30 1C31.6569 1 33 2.34315 33 4H35C35 1.23858 32.7614 -1 30 -1V1ZM4 -1C1.23858 -1 -1 1.23858 -1 4H1C1 2.34315 2.34315 1 4 1V-1Z" fill="#EAEAEA" />
              <path fillRule="evenodd" clipRule="evenodd" d="M17.179 16.8295C15.9949 17.8275 14.459 18.43 12.7807 18.43C9.03582 18.43 6 15.4303 6 11.73C6 8.02972 9.03582 5.03003 12.7807 5.03003C14.459 5.03003 15.9949 5.63253 17.179 6.63057C18.363 5.63253 19.8989 5.03003 21.5773 5.03003C25.3221 5.03003 28.358 8.02972 28.358 11.73C28.358 15.4303 25.3221 18.43 21.5773 18.43C19.8989 18.43 18.363 17.8275 17.179 16.8295Z" fill="#ED0006" />
              <path fillRule="evenodd" clipRule="evenodd" d="M17.179 16.8295C18.6369 15.6006 19.5614 13.772 19.5614 11.73C19.5614 9.68807 18.6369 7.85947 17.179 6.63057C18.363 5.63253 19.8989 5.03003 21.5772 5.03003C25.3221 5.03003 28.3579 8.02972 28.3579 11.73C28.3579 15.4303 25.3221 18.43 21.5772 18.43C19.8989 18.43 18.363 17.8275 17.179 16.8295Z" fill="#F9A000" />
              <path fillRule="evenodd" clipRule="evenodd" d="M17.179 16.8295C18.6369 15.6006 19.5614 13.772 19.5614 11.7301C19.5614 9.68811 18.6369 7.85952 17.179 6.63062C15.7211 7.85952 14.7966 9.68811 14.7966 11.7301C14.7966 13.772 15.7211 15.6006 17.179 16.8295Z" fill="#FF5E00" />
            </svg>


            <svg width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 3.66667C0.5 1.64162 2.14162 0 4.16667 0H29.8333C31.8584 0 33.5 1.64162 33.5 3.66667V18.3333C33.5 20.3584 31.8584 22 29.8333 22H4.16667C2.14162 22 0.5 20.3584 0.5 18.3333V3.66667Z" fill="white" />
              <path d="M4.16667 0.458333H29.8333C31.6052 0.458333 33.0417 1.89475 33.0417 3.66667V18.3333C33.0417 20.1052 31.6052 21.5417 29.8333 21.5417H4.16667C2.39475 21.5417 0.958333 20.1052 0.958333 18.3333V3.66667C0.958333 1.89475 2.39475 0.458333 4.16667 0.458333Z" stroke="black" strokeOpacity="0.05" strokeWidth="0.916667" />
              <path fillRule="evenodd" clipRule="evenodd" d="M19.7086 9.23182C19.7036 9.60631 20.1653 9.85296 20.9191 10.2227C22.1632 10.7932 22.7378 11.485 22.7296 12.3943C22.7129 14.0534 21.2413 15.1249 18.9745 15.1249C18.0074 15.1148 17.0761 14.9215 16.5723 14.6984L16.875 12.9092L17.1528 13.0363C17.861 13.3347 18.3196 13.4558 19.1827 13.4558C19.8026 13.4558 20.4676 13.2111 20.4729 12.6754C20.4769 12.3254 20.1947 12.0757 19.3553 11.6839C18.5372 11.3016 17.4538 10.6609 17.4657 9.51246C17.4785 7.95891 18.9795 6.87494 21.1104 6.87494C21.9464 6.87494 22.6158 7.04871 23.0432 7.21054L22.7508 8.94291L22.5576 8.85059C22.1596 8.68861 21.6487 8.53336 20.9435 8.54438C20.0993 8.54438 19.7086 8.89958 19.7086 9.23182ZM26.7734 9.93887C26.7734 9.93887 26.0926 11.7126 25.9142 12.1731H27.7044C27.618 11.7731 27.2052 9.86523 27.2052 9.86523L27.0594 9.17611C27.0024 9.33311 26.9233 9.54045 26.8626 9.69942L26.8626 9.69949L26.8623 9.7001C26.8072 9.84463 26.7674 9.949 26.7734 9.93887ZM26.9069 7.02168H28.5733L30.3186 15.0089H28.3176C28.3176 15.0089 28.1198 14.0911 28.0553 13.8114C27.8886 13.8114 27.1926 13.8104 26.5381 13.8095L26.5363 13.8095C25.9564 13.8087 25.4097 13.808 25.2934 13.808C25.2098 14.0242 24.8394 15.0089 24.8394 15.0089H22.575L25.7777 7.68446C26.0044 7.16391 26.3907 7.02168 26.9069 7.02168ZM11.2575 7.01964L9.14611 12.47L8.9212 11.3623L8.16508 7.68947C8.03444 7.18331 7.65584 7.03235 7.18753 7.01475H3.7102L3.68262 7.18102C4.52846 7.38786 5.28488 7.68626 5.94779 8.05769L7.86499 14.9994L10.1467 14.9968L13.5417 7.01964H11.2575ZM13.0662 15.0065L14.4145 7.01386H16.571L15.2218 15.0065H13.0662Z" fill="#1434CB" />
            </svg>



            <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4C0 1.79086 1.79086 0 4 0H30C32.2091 0 34 1.79086 34 4V20C34 22.2091 32.2091 24 30 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#1F72CD" />
              <path fillRule="evenodd" clipRule="evenodd" d="M6.09542 8.5L2.91431 15.7467H6.72254L7.19465 14.5913H8.27379L8.7459 15.7467H12.9377V14.8649L13.3112 15.7467H15.4795L15.8531 14.8462V15.7467H24.5709L25.6309 14.6213L26.6235 15.7467L31.1011 15.7561L27.91 12.1436L31.1011 8.5H26.6929L25.661 9.60463L24.6997 8.5H15.2159L14.4015 10.3704L13.568 8.5H9.76774V9.35186L9.34498 8.5H6.09542ZM6.83229 9.52905H8.6886L10.7986 14.4431V9.52905H12.8322L14.4619 13.0524L15.9639 9.52905H17.9873V14.7291H16.7561L16.746 10.6544L14.9511 14.7291H13.8498L12.0448 10.6544V14.7291H9.51203L9.03187 13.5633H6.43769L5.95851 14.728H4.60147L6.83229 9.52905ZM24.1198 9.52905H19.1137V14.726H24.0423L25.6309 13.0036L27.1621 14.726H28.7627L26.4362 12.1426L28.7627 9.52905H27.2315L25.651 11.2316L24.1198 9.52905ZM7.73532 10.4089L6.88064 12.4856H8.58901L7.73532 10.4089ZM20.3499 11.555V10.6057V10.6048H23.4736L24.8366 12.1229L23.4132 13.6493H20.3499V12.613H23.081V11.555H20.3499Z" fill="white" />
            </svg>


            <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4C0 1.79086 1.79086 0 4 0H30C32.2091 0 34 1.79086 34 4V20C34 22.2091 32.2091 24 30 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#00D632" />
              <path fillRule="evenodd" clipRule="evenodd" d="M17.4845 8.17639C18.6245 8.17639 19.7171 8.63799 20.431 9.27162C20.6115 9.43191 20.8818 9.43093 21.0513 9.25922L21.9007 8.39772C22.0799 8.21589 22.0734 7.91817 21.8798 7.75201C21.3098 7.26201 20.5446 6.78017 19.6028 6.47168L19.8692 5.2031C19.927 4.9266 19.7164 4.66675 19.4337 4.66675H17.7923C17.5824 4.66675 17.4009 4.81365 17.3572 5.01899L17.1172 6.14719C14.9353 6.25622 13.0859 7.34493 13.0859 9.57881C13.0859 11.5127 14.616 12.3415 16.2309 12.9151C17.761 13.4887 18.5683 13.7015 18.5683 14.5088C18.5683 15.3377 17.761 15.8264 16.5708 15.8264C15.4857 15.8264 14.349 15.4683 13.4669 14.5986C13.2939 14.4279 13.0171 14.4266 12.844 14.5973L11.9313 15.4976C11.7527 15.6736 11.7544 15.9628 11.9342 16.1371C12.6459 16.8279 13.5469 17.328 14.5752 17.6081L14.3248 18.7833C14.2664 19.0589 14.475 19.3187 14.757 19.321L16.401 19.3334C16.6126 19.335 16.7963 19.1872 16.8394 18.9799L17.0768 17.85C19.6893 17.6888 21.2883 16.2687 21.2883 14.1902C21.2883 12.2779 19.6949 11.4702 17.761 10.8115C16.656 10.4073 15.6995 10.1315 15.6995 9.30296C15.6995 8.49566 16.5923 8.17639 17.4845 8.17639Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage;