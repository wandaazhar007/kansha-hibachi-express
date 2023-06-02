const Footer = () => {
  return (
    // <footer style="background: url(images/footer_bg.jpg);">
    <footer>
      <div className="footer_overlay pt_100 xs_pt_70 pb_100 xs_pb_20">
        <div className="container wow fadeInUp" data-wow-duration="1s">
          <div className="row justify-content-between">
            <div className="col-xxl-4 col-lg-4 col-sm-9 col-md-7">
              <div className="tf__footer_content">
                <a className="footer_logo" href="index.html">
                  <img src="images/logo-kansha-header.png" alt="RegFood" className="img-fluid w-100" />
                </a>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui
                  placeat inventore consectetur repellendus optio debitis.</span>
                <ul className="social_link d-flex flex-wrap">
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-behance"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-2 col-sm-5 col-md-5">
              <div className="tf__footer_content">
                <h3>Short Link</h3>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Our Service</a></li>
                  <li><a href="#">gallery</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-2 col-sm-6 col-md-5 order-md-4">
              <div className="tf__footer_content">
                <h3>Help Link</h3>
                <ul>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Refund Policy</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-sm-9 col-md-7 order-lg-4">
              <div className="tf__footer_content">
                <h3>contact us</h3>
                <p className="info"><i className="fas fa-phone-alt"></i> +44 (0) 20 9994 7740</p>
                <p className="info"><i className="fas fa-envelope"></i> themefaxbd@gmail.com</p>
                <p className="info"><i className="far fa-map-marker-alt"></i> Blackwell Street,Dry Creek,Alaska</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tf__footer_bottom d-flex flex-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tf__footer_bottom_text">
                {/* <p>Copyright ©<b> Kansha Express</b> 2023. All Rights Reserved</p> */}
                <p>Build with love by<b> Wanda Azhar</b> 2023. in Michigan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;