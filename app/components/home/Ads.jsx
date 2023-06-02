const Ads = () => {
  return (
    <section className="tf__add_slider mt_75 xs_mt_45">
      <div className="container">
        <div className="row wow fadeInUp" data-wow-duration="1s">
          <div className="col-xl-6 col-lg-6">
            <div className="tf__add_slider_single" style={{ backgroundImage: "url(" + "/images/offer_slider_1.png" + ")" }}>
              <div className="text">
                <h5>weekly best seller</h5>
                <h2>Hibachi Chicken</h2>
                <p>Neque porro quisquam est qui dolor ipsum quia dolor sit ametsed.</p>
                <a href="menu_details.html">shop now <i className="far fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tf__add_slider_single" style={{ backgroundImage: "url(" + "/images/offer_slider_2.png" + ")" }}>
              <div className="text">
                <h5>daily offer</h5>
                <h2>Hibachi Steak</h2>
                <p>Neque porro quisquam est qui dolor ipsum quia dolor sit ametsed.</p>
                <a href="menu_details.html">shop now <i className="far fa-long-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ads;