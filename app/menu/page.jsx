import Link from "next/link";

const MenuPage = () => {
  return (
    <>
      {/* <section className="tf__breadcrumb" style="background: url(images/counter_bg.jpg);"> */}
      <section className="tf__breadcrumb" >
        <div className="tf__breadcrumb_overlay">
          <div className="container">
            <div className="tf__breadcrumb_text">
              <h1>Popular Foods menu</h1>
              <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/menu">menu</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="tf__menu_page mt_100 xs_mt_70 mb_100 xs_mb_70">
        <div className="container">
          <form className="tf__menu_search_area">
            <div className="row">
              <div className="col-lg-6 col-md-5">
                <div className="tf__menu_search">
                  <input type="text" placeholder="search..." />
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="tf__menu_search">
                  <div className="select_area">
                    <select className="select_js">
                      <option value="AL">default shorting</option>
                      <option value="">short by popularity</option>
                      <option value="">short by avarage rating</option>
                      <option value="">short by latest</option>
                      <option value="">short by low to high</option>
                      <option value="">short by high to low</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3">
                <div className="tf__menu_search">
                  <button className="common_btn" type="submit">Search</button>
                </div>
              </div>
            </div>
          </form>

          <div className="row">
            <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__menu_item">
                <div className="tf__menu_item_img">
                  <img src="images/menu2_img_1.jpg" alt="menu" className="img-fluid w-100" />
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
            <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__menu_item">
                <div className="tf__menu_item_img">
                  <img src="images/menu2_img_2.jpg" alt="menu" className="img-fluid w-100" />
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
            <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__menu_item">
                <div className="tf__menu_item_img">
                  <img src="images/menu2_img_3.jpg" alt="menu" className="img-fluid w-100" />
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
            <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__menu_item">
                <div className="tf__menu_item_img">
                  <img src="images/menu2_img_4.jpg" alt="menu" className="img-fluid w-100" />
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
            <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__menu_item">
                <div className="tf__menu_item_img">
                  <img src="images/menu2_img_5.jpg" alt="menu" className="img-fluid w-100" />
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
            <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__menu_item">
                <div className="tf__menu_item_img">
                  <img src="images/menu2_img_6.jpg" alt="menu" className="img-fluid w-100" />
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
            <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__menu_item">
                <div className="tf__menu_item_img">
                  <img src="images/menu2_img_7.jpg" alt="menu" className="img-fluid w-100" />
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
            <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__menu_item">
                <div className="tf__menu_item_img">
                  <img src="images/menu2_img_8.jpg" alt="menu" className="img-fluid w-100" />
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
          <div className="tf__pagination mt_50">
            <div className="row">
              <div className="col-12">
                <nav aria-label="...">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#"><i className="fas fa-long-arrow-alt-left"></i></a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item active"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#"><i className="fas fa-long-arrow-alt-right"></i></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MenuPage;