import Image from "next/image";
import Link from "next/link";
import { faHeart, faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  return (
    <>
      {/* <section className="tf__menu mt_95 xs_mt_65">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-duration="1s">
            <div className="tf__section_heading mb_25">
              <h4>food Menu</h4>
              <h2>Popular Delicious Foods</h2>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-duration="1s">
            <div className="menu_filter d-flex flex-wrap">
              <button className=" active" data-filter="*">all menu</button>
              <button data-filter=".burger">burger</button>
              <button data-filter=".chicken">chicken</button>
              <button data-filter=".pizza">pizza</button>
              <button data-filter=".dresserts">dresserts</button>
            </div>
          </div>
        </div>

        <div className="row grid">
          <div className="col-xxl-3 col-sm-6 col-lg-4 chicken wow fadeInUp" data-wow-duration="1s">
            <div className="tf__menu_item">
              <div className="tf__menu_item_img">
                <Image height={100} width={100} src="/images/menu2_img_1.jpg" alt="menu" className="img-fluid w-100" />
              </div>
              <div className="tf__menu_item_text">
                <a className="category" href="#">Biryani</a>
                <a className="title" href="menu_details.html">Hyderabadi biryani</a>
                <p className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                  <span>24</span>
                </p>
                <h5 className="price">$65.00 <del>$90.00</del></h5>
                <a className="tf__add_to_cart" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">add
                  to cart</a>
                <ul className="d-flex flex-wrap justify-content-end">
                  <li><a href="#"><i className="fal fa-heart"></i></a></li>
                  <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-sm-6 col-lg-4 burger dresserts wow fadeInUp" data-wow-duration="1s">
            <div className="tf__menu_item">
              <div className="tf__menu_item_img">
                <Image height={100} width={100} src="/images/menu2_img_2.jpg" alt="menu" className="img-fluid w-100" />
              </div>
              <div className="tf__menu_item_text">
                <a className="category" href="#">Chicken</a>
                <a className="title" href="menu_details.html">Daria Shevtsova</a>
                <p className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>30</span>
                </p>
                <h5 className="price">$80.00</h5>
                <a className="tf__add_to_cart" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">add
                  to cart</a>
                <ul className="d-flex flex-wrap justify-content-end">
                  <li><a href="#"><i className="fal fa-heart"></i></a></li>
                  <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-sm-6 col-lg-4 chicken wow fadeInUp" data-wow-duration="1s">
            <div className="tf__menu_item">
              <div className="tf__menu_item_img">
                <Image height={100} width={100} src="/images/menu2_img_3.jpg" alt="menu" className="img-fluid w-100" />
              </div>
              <div className="tf__menu_item_text">
                <a className="category" href="#">burger</a>
                <a className="title" href="menu_details.html">Spicy Burger</a>
                <p className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span>17</span>
                </p>
                <h5 className="price">$100.00 <del>$110.00</del></h5>
                <a className="tf__add_to_cart" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">add
                  to cart</a>
                <ul className="d-flex flex-wrap justify-content-end">
                  <li><a href="#"><i className="fal fa-heart"></i></a></li>
                  <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-sm-6 col-lg-4 burger pizza wow fadeInUp" data-wow-duration="1s">
            <div className="tf__menu_item">
              <div className="tf__menu_item_img">
                <Image height={100} width={100} src="/images/menu2_img_4.jpg" alt="menu" className="img-fluid w-100" />
              </div>
              <div className="tf__menu_item_text">
                <a className="category" href="#">dressert</a>
                <a className="title" href="menu_details.html">Fried Chicken</a>
                <p className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <span>22</span>
                </p>
                <h5 className="price">$99.00</h5>
                <a className="tf__add_to_cart" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">add
                  to cart</a>
                <ul className="d-flex flex-wrap justify-content-end">
                  <li><a href="#"><i className="fal fa-heart"></i></a></li>
                  <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-sm-6 col-lg-4 chicken dresserts wow fadeInUp" data-wow-duration="1s">
            <div className="tf__menu_item">
              <div className="tf__menu_item_img">
                <Image height={100} width={100} src="/images/menu2_img_5.jpg" alt="menu" className="img-fluid w-100" />
              </div>
              <div className="tf__menu_item_text">
                <a className="category" href="#">kabab</a>
                <a className="title" href="menu_details.html">Mozzarella Sticks</a>
                <p className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span>72</span>
                </p>
                <h5 className="price">$75.00</h5>
                <a className="tf__add_to_cart" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">add
                  to cart</a>
                <ul className="d-flex flex-wrap justify-content-end">
                  <li><a href="#"><i className="fal fa-heart"></i></a></li>
                  <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-sm-6 col-lg-4 burger pizza wow fadeInUp" data-wow-duration="1s">
            <div className="tf__menu_item">
              <div className="tf__menu_item_img">
                <Image height={100} width={100} src="/images/menu2_img_6.jpg" alt="menu" className="img-fluid w-100" />
              </div>
              <div className="tf__menu_item_text">
                <a className="category" href="#">kacchi</a>
                <a className="title" href="menu_details.html">Popcorn Chicken</a>
                <p className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                  <span>57</span>
                </p>
                <h5 className="price">$69.00 <del>$80.00</del></h5>
                <a className="tf__add_to_cart" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">add
                  to cart</a>
                <ul className="d-flex flex-wrap justify-content-end">
                  <li><a href="#"><i className="fal fa-heart"></i></a></li>
                  <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-sm-6 col-lg-4 chicken dresserts wow fadeInUp" data-wow-duration="1s">
            <div className="tf__menu_item">
              <div className="tf__menu_item_img">
                <Image height={100} width={100} src="/images/menu2_img_7.jpg" alt="menu" className="img-fluid w-100" />
              </div>
              <div className="tf__menu_item_text">
                <a className="category" href="#">noodles</a>
                <a className="title" href="menu_details.html">Chicken Wings</a>
                <p className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                  <span>43</span>
                </p>
                <h5 className="price">$79.00 <del>$90.00</del></h5>
                <a className="tf__add_to_cart" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">add
                  to cart</a>
                <ul className="d-flex flex-wrap justify-content-end">
                  <li><a href="#"><i className="fal fa-heart"></i></a></li>
                  <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-sm-6 col-lg-4 burger pizza wow fadeInUp" data-wow-duration="1s">
            <div className="tf__menu_item">
              <div className="tf__menu_item_img">
                <Image height={100} width={100} src="/images/menu2_img_8.jpg" alt="menu" className="img-fluid w-100" />
              </div>
              <div className="tf__menu_item_text">
                <a className="category" href="#">grill</a>
                <a className="title" href="menu_details.html">Onion Rings</a>
                <p className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>62</span>
                </p>
                <h5 className="price">$110.00</h5>
                <a className="tf__add_to_cart" href="#" data-bs-toggle="modal" data-bs-target="#cartModal">add
                  to cart</a>
                <ul className="d-flex flex-wrap justify-content-end">
                  <li><a href="#"><i className="fal fa-heart"></i></a></li>
                  <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

      <section className="products">
        <div className="container">
          <div className="box-container">
            <div className="header">
              <h1 className="title">
                <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
                <span>Our Menu</span>
              </h1>
              <Link href="/products"><button className="btn-sm">View All</button></Link>
            </div>
            <div className="content">
              <div className="box">
                <div className="box-images">
                  <Image height={100} width={100} src="/images/menu2_img_1.jpg" alt="menu" />
                </div>
                <div className="box-contents">
                  <Link href={`/products/`}><h1 className="title">Test</h1></Link>
                  <p className="price">$322</p>
                  <div className="footer-products">
                    <div className="desc">
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="btn-cart"><div className="add-cart"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="box-images">
                  <Image height={100} width={100} src="/images/menu2_img_1.jpg" alt="menu" />
                </div>
                <div className="box-contents">
                  <Link href={`/products/`}><h1 className="title">Test</h1></Link>
                  <p className="price">$322</p>
                  <div className="footer-products">
                    <div className="desc">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, quas.</p>
                    </div>
                    <div className="btn-cart"><div className="add-cart"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="box-images">
                  <Image height={100} width={100} src="/images/menu2_img_1.jpg" alt="menu" />
                </div>
                <div className="box-contents">
                  <Link href={`/products/`}><h1 className="title">Test</h1></Link>
                  <p className="price">$322</p>
                  <div className="footer-products">
                    <div className="desc">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, quas.</p>
                    </div>
                    <div className="btn-cart"><div className="add-cart"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section >
    </>
  );
}

export default Menu;