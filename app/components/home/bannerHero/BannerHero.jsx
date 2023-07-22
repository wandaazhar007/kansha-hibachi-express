import Image from "next/image";
import Link from "next/link";
import './banner-hero.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const BannerHero = () => {
  return (
    <section className="hero" style={{ backgroundImage: "url(" + "/images/banner_bg.jpg" + ")" }}>
      <div className="container">
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
        <div className="banner-hero">

          <div className="col-left" >
            <h3>Unleash Your Taste Buds.</h3>
            <h1>Indulge Kansha Hibachi Delights</h1>
            <p>Visit us today and experience the thrill of hibachi cuisine brought to life at Kansha Hibachi Express. We look forward to serving you and sharing the joy of our flavorful creations.</p>
            <div className="cta-hero">
              <Link href="tel:16604299074">
                <button className="btn-cta-hero"><i className="fas fa-phone"></i> Call Us Now</button>
              </Link>
            </div>
            <div className="review-hero">
              <div className="stars-review">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <div className="desc-review">
                <p>
                  5 Stars Ratings on <Link href="https://goo.gl/maps/V9qXQh6mKFZmb15Z7" target="_blank"><span>Google Review</span><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></Link>
                </p>
              </div>
            </div>


          </div>
          <div className="col-right">
            <div className="image-right">
              <Image src={'/images/slider_img_1.png'} alt="kansha hibachi express" height={100} width={100} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerHero;