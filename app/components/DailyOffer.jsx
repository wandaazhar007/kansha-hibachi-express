const DailyOffer = () => {
  return (
    <section className="tf__offer_item pt_95 pb_100 xs_pt_65 xs_pb_70">
      <div className="container">
        <div className="row wow fadeInUp" data-wow-duration="1s">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <div className="tf__section_heading mb_25">
              <h4>daily offer</h4>
              <h2>up to 75% off for this day</h2>
            </div>
          </div>
        </div>
        <div className="row offer_item_slider wow fadeInUp" data-wow-duration="1s">
          <div className="col-xl-4">
            <div className="tf__offer_item_single" style="background: url(images/offer_item_img1.jpg);">
              <span>37% off</span>
              <a className="title" href="menu_details.html">Chicken Nuggets</a>
              <p>Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.</p>
              <ul className="d-flex flex-wrap">
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#cartModal"><i
                  className="fas fa-shopping-basket"></i></a></li>
                <li><a href="#"><i className="fal fa-heart"></i></a></li>
                <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="tf__offer_item_single" style="background: url(images/offer_item_img2.jpg);">
              <span>40% off</span>
              <a className="title" href="menu_details.html">Beef Masala</a>
              <p>Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.</p>
              <ul className="d-flex flex-wrap">
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#cartModal"><i
                  className="fas fa-shopping-basket"></i></a></li>
                <li><a href="#"><i className="fal fa-heart"></i></a></li>
                <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="tf__offer_item_single" style="background: url(images/offer_item_img3.jpg);">
              <span>55% off</span>
              <a className="title" href="menu_details.html">Dal Makhani</a>
              <p>Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.</p>
              <ul className="d-flex flex-wrap">
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#cartModal"><i
                  className="fas fa-shopping-basket"></i></a></li>
                <li><a href="#"><i className="fal fa-heart"></i></a></li>
                <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="tf__offer_item_single" style="background: url(images/offer_item_img2.jpg);">
              <span>45% off</span>
              <a className="title" href="menu_details.html">Beef Masala</a>
              <p>Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.</p>
              <ul className="d-flex flex-wrap">
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#cartModal"><i
                  className="fas fa-shopping-basket"></i></a></li>
                <li><a href="#"><i className="fal fa-heart"></i></a></li>
                <li><a href="menu_details.html"><i className="far fa-eye"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DailyOffer;