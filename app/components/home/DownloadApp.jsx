import Image from "next/image";

const DownloadApp = () => {
  return (
    <section className="tf__download mt_100 xs_mt_70">
      <div className="row">
        <div className="col-xl-4 col-lg-4">
          {/* <div className="tf__download_text_bg" style="background: url(images/download_img.png);"> */}
          <div className="tf__download_text_bg" style={{ backgroundImage: "url(" + "/images/download_img.png" + ")" }}>
            <div className="tf__download_text_overlay">
              <div className="tf__download_text wow fadeInUp" data-wow-duration="1s">
                <h5>$5.00 Cashback</h5>
                <h2>Easy To Order Our All Food</h2>
                <ul className="d-flex flex-wrap">
                  <li>
                    <a href="#">
                      <span className="icon"><i className="fab fa-google-play"></i></span>
                      <p>
                        <span>Available on the</span>
                        Google Play
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon"><i className="fab fa-apple"></i></span>
                      <p>
                        <span>Download on the</span>
                        App Store
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-8">
          <div className="row download_slider">
            <div className="col-xl-3 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__download_slider">
                <Image width={200} height={200} src="/images/download_slider_3.jpg" alt="app download" className="img-fluid w-100" />
              </div>
            </div>
            <div className="col-xl-3 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__download_slider">
                <Image width={200} height={200} src="/images/download_slider_3.jpg" alt="app download" className="img-fluid w-100" />
              </div>
            </div>
            <div className="col-xl-3 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__download_slider">
                <Image width={200} height={200} src="/images/download_slider_2.jpg" alt="app download" className="img-fluid w-100" />
              </div>
            </div>
            <div className="col-xl-3 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__download_slider">
                <Image width={200} height={200} src="/images/download_slider_1.jpg" alt="app download" className="img-fluid w-100" />
              </div>
            </div>
            <div className="col-xl-3 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__download_slider">
                <Image width={200} height={200} src="/images/download_slider_5.jpg" alt="app download" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;