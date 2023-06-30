import { faArrowLeft, faClock, faMapLocation, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
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
          <div className="cart-header-right">
            <Image src="/images/logo-kansha-header.png" width={100} height={50} alt="logo kansha hibachi" />
          </div>
        </div>
        <div className="contents">
          <div className="col-left">
            <h1 className="title">Your Cart</h1>
            <p className="total-order">Total Order (2 Items)</p>
            <div className="list-items">
              <div className="box">
                <div className="image">
                  <Image src="/images/products/menu2_img_1.jpg" width={100} height={100} alt="images" />
                </div>
                <div className="title">
                  <p className="name-product">Alborcore Tuna</p>
                  <p className="price-product">$3.50</p>
                  <div className="button">
                    <span className="">-</span>
                    <span>1</span>
                    <span>+</span>
                  </div>
                </div>
                <div className="delete">
                  <span>$3.50</span>
                  <FontAwesomeIcon icon={faTrash} className="icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-right">
            <div className="pickup-location">
              <div className="address">
                <FontAwesomeIcon icon={faMapLocation} className="icon" />
                Pickup: 26425 Novi Road Suite C
              </div>
              <div className="time">
                <FontAwesomeIcon icon={faClock} className="icon" />
                Today at 6:10 PM
              </div>
            </div>
            <div className="add-tip">
              <h1>ADD A TIP</h1>
              <div className="boxes">
                <div className="box">
                  <h1>10%</h1>
                  <h1>$0.70</h1>
                </div>
                <div className="box">
                  <h1>10%</h1>
                  <h1>$0.70</h1>
                </div>
                <div className="box">
                  <h1>10%</h1>
                  <h1>$0.70</h1>
                </div>
                <div className="box">
                  <h1>Other</h1>
                </div>
              </div>
            </div>
            <div className="summary">
              <div className="sub-total">
                <p>Sub Total</p>
                <p>$7.00</p>
              </div>
              <div className="taxes">
                <p>Estimated taxes (MI Sales Tax)</p>
                <p>$0.42</p>
              </div>
              <div className="tip">
                <p>Tip</p>
                <p>$0.00</p>
              </div>
              <div className="total">
                <p>Total</p>
                <p>$7.42</p>
              </div>
              <small>Additional taxes and fees will be calculated at checkout
              </small>
              <butto>Continue Payment</butto>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage;