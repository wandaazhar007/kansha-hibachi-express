const Testimonial = () => {
  return (
    // <section className="tf__testimonial pt_90 xs_pt_60 pb_100 xs_pb_70" style="background: url(images/testimonial_bg.jpg);">
    <section className="tf__testimonial pt_90 xs_pt_60 pb_100 xs_pb_70">
      <div className="container">
        <div className="row wow fadeInUp" data-wow-duration="1s">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <div className="tf__section_heading mb_20">
              <h4>testimonial</h4>
              <h2>our customar feedbacks</h2>
            </div>
          </div>
        </div>

        <div className="row testi_slider">
          <div className="col-xl-6 wow fadeInUp" data-wow-duration="1s">
            <div className="tf__single_testimonial">
              <div className="tf__single_testimonial_img">
                <img src="images/testimonial_img_2.jpg" alt="testimonial" className="img-fluid w-100" />
              </div>
              <div className="tf__single_testimonial_text">
                <h4>isita islam</h4>
                <p className="designation">nyc usa</p>
                <p className="feedback">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus
                  praesentium quaerat nihil magnam a porro eaque numquam</p>
                <span className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-6 wow fadeInUp" data-wow-duration="1s">
            <div className="tf__single_testimonial">
              <div className="tf__single_testimonial_img">
                <img src="images/testimonial_img_3.jpg" alt="testimonial" className="img-fluid w-100" />
              </div>
              <div className="tf__single_testimonial_text">
                <h4>isita islam</h4>
                <p className="designation">nyc usa</p>
                <p className="feedback">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus
                  praesentium quaerat nihil magnam a porro eaque numquam</p>
                <span className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-6 wow fadeInUp" data-wow-duration="1s">
            <div className="tf__single_testimonial">
              <div className="tf__single_testimonial_img">
                <img src="images/testimonial_img_1.jpg" alt="testimonial" className="img-fluid w-100" />
              </div>
              <div className="tf__single_testimonial_text">
                <h4>isita islam</h4>
                <p className="designation">nyc usa</p>
                <p className="feedback">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusamus
                  praesentium quaerat nihil magnam a porro eaque numquam</p>
                <span className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;