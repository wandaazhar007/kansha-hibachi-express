import Image from "next/image";
import Link from "next/link";

const BannerHero = () => {
  return (
    <>
      {/* <section className="tf__banner">
      <div className="tf__banner_overlay">
        <span className="banner_shape_1">
          <Image src="/images/tree_5.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
        </span>
        <span className="banner_shape_2">
          <Image src="/images/tree_3.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
        </span>
        <span className="banner_shape_3">
          <Image src="/images/tree_4.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
        </span>
        <span className="banner_shape_4">
          <Image src="/images/tree_6.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
        </span>
        <span className="banner_shape_5">
          <Image src="/images/tree_7.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
        </span>
        <span className="banner_shape_6">
          <Image src="/images/tree_2.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
        </span>
        <div className="col-12">
          <div className="tf__banner_slider" style={{ backgroundImage: "url(" + "/images/banner_bg.jpg" + ")" }}>
            <div className="tf__banner_slider_overlay">
              <div className=" container">
                <div className="row ">
                  <div className="col-xxl-6 col-xl-6 col-md-10 col-lg-6">
                    <div className="tf__banner_text wow fadeInLeft" data-wow-duration="1s">
                      <h3>Satisfy Your Cravings</h3>
                      <h1>Delicious Foods With <span>Kansha</span> Hibachi</h1>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugit</p>
                      <div className="review-hero">
                        <div className="stars-review">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>

                        <div className="desc-review">
                          <p>5 Stars Ratings on <Link href="#" target="_blank"><span>Google Review</span></Link></p>
                        </div>
                      </div>

                      <div className="cta-hero">
                        <Link href="tel:16604299074">
                          <button className="btn-cta-hero"><i className="fas fa-phone"></i> Call Us Now</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-5 col-xl-6 col-sm-10 col-md-9 col-lg-6">
                    <div className="tf__banner_img wow fadeInRight" data-wow-duration="1s">
                      <div className="img">
                        <Image src="/images/slider_img_1.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
                        <span>
                          35% off
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

      <section className="hero">
        <div className="container">
          <div className="banner-hero">
            <div className="img-overlay">
              <span className="banner_shape_1">
                <Image src="/images/tree_5.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
              </span>
              <span className="banner_shape_2">
                <Image src="/images/tree_3.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
              </span>
              <span className="banner_shape_3">
                <Image src="/images/tree_4.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
              </span>
              <span className="banner_shape_4">
                <Image src="/images/tree_6.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
              </span>
              <span className="banner_shape_5">
                <Image src="/images/tree_7.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
              </span>
              <span className="banner_shape_6">
                <Image src="/images/tree_2.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
              </span>
            </div>
            <div className="col-left">
              <h3>Satisfy Your Cravings</h3>
              <h1>Delicious Foods With <span>Kansha</span> Hibachi</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugit</p>
              <div className="review-hero">
                <div className="stars-review">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>

                <div className="desc-review">
                  <p>5 Stars Ratings on <Link href="#" target="_blank"><span>Google Review</span></Link></p>
                </div>
              </div>

              <div className="cta-hero">
                <Link href="tel:16604299074">
                  <button className="btn-cta-hero"><i className="fas fa-phone"></i> Call Us Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerHero;