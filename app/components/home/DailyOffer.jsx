import Image from "next/image";
import Link from "next/link";

const DailyOffer = () => {
  return (
    <section className="dialy-offer">
      <div className="container">
        <div className="heading-dialy-offer">
          <h1>Daily Offer</h1>
          <h1>Up to 50% off</h1>
        </div>
        <div className="content-dialy-offer">
          <div className="box" style={{ backgroundImage: "url(" + "/images/offer_item_img1.jpg" + ")" }}>
            <h1 className="title-dialy-offer">Hibachi Steak</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <i className="icons far fa-eye"></i>
          </div>
          <div className="box" style={{ backgroundImage: "url(" + "/images/offer_item_img2.jpg" + ")" }}>
            <h1 className="title-dialy-offer">Hibachi Chiken</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <i className="icons far fa-eye"></i>
          </div>
          <div className="box" style={{ backgroundImage: "url(" + "/images/offer_item_img3.jpg" + ")" }}>
            <h1 className="title-dialy-offer">Hibachi Shrimp</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <i className="icons far fa-eye"></i>
          </div>
          <div className="box" style={{ backgroundImage: "url(" + "/images/offer_item_img1.jpg" + ")" }}>
            <h1 className="title-dialy-offer">Hibachi Loster</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link href="/menu">
              <i className="icons far fa-eye"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DailyOffer;