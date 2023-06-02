import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      {/* <section className="tf__breadcrumb" style="background: url(images/breadcrumb_bg.jpg);"> */}
      <section className="tf__breadcrumb">
        <div className="tf__breadcrumb_overlay">
          <div className="container">
            <div className="tf__breadcrumb_text">
              <h1>about us</h1>
              <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/about">about us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="tf__about_us mt_100 xs_mt_70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-duration="1s">
              <div className="tf__about_us_img">
                <div className="img">
                  <img src="images/about_chef.jpg" alt="about us" className="img-fluid w-100" />
                </div>
                <h3>12+ <span>Years experience</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis architecto
                  reiciendis.
                  <span>jhon deo</span>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-duration="1s">
              <div className="tf__section_heading mb_25">
                <h4>About Company</h4>
                <h2>Helathy Foods Provider</h2>
              </div>
              <div className="tf__about_us_text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur molestiae
                  minima pariatur consequatur voluptate sapiente deleniti soluta,.</p>
                <ul>
                  <li>
                    <h4>trusted partner</h4>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Minus, Officiis Placeat
                      Iusto Quasi Adipisci Impedit Delectus Beatae Ab Maxime.</p>
                  </li>
                  <li>
                    <h4>first Delivery</h4>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Minus, Officiis Placeat
                      Iusto Quasi Adipisci Impedit Delectus Beatae Ab Maxime.</p>
                  </li>
                  <li>
                    <h4>secure payment</h4>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Minus, Officiis Placeat
                      Iusto Quasi Adipisci Impedit Delectus Beatae Ab Maxime.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="tf__mission mt_100 xs_mt_70" style="background: url(images/mission_bg.png);"> */}
      <section className="tf__mission mt_100 xs_mt_70" >
        <div className="tf__mission_overlay pt_70 xs_pt_40 pb_100 xs_pb_70">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-10 col-lg-7">
                <div className="tf__mission_text">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="far fa-bullseye-arrow"></i>
                      </div>
                      <div className="text">
                        <h4>vision</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis
                          perspiciatis voluptatum odit.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-lightbulb-on"></i>
                      </div>
                      <div className="text">
                        <h4>mission</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis
                          perspiciatis voluptatum odit.</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="far fa-gem"></i>
                      </div>
                      <div className="text">
                        <h4>goals</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corporis
                          perspiciatis voluptatum odit.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tf__about_choose mt_100 xs_mt_70">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7 wow fadeInLeft" data-wow-duration="1s">
              <div className="tf__section_heading mb_25">
                <h4>Why choose us</h4>
                <h2>Why we are the best</h2>
              </div>
              <div className="tf__about_choose_text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa, itaque repudiandae
                  praesentium tempore quos, totam, facilis doloribus doloremque illo delectus.</p>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="tf__about_choose_text_box">
                      <span><i className="fas fa-burger-soda"></i></span>
                      <h4>Fresh food</h4>
                      <p>Objectively pontificate quality models before intuitive information.</p>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="tf__about_choose_text_box">
                      <span><i className="fal fa-truck"></i></span>
                      <h4>Fast Delivery</h4>
                      <p>Objectively pontificate quality models before intuitive information.</p>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="tf__about_choose_text_box">
                      <span><i className="fas fa-file-certificate"></i></span>
                      <h4>Quality Maintain</h4>
                      <p>Objectively pontificate quality models before intuitive information.</p>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="tf__about_choose_text_box">
                      <span><i className="fas fa-headset"></i></span>
                      <h4>24/7 Service</h4>
                      <p>Objectively pontificate quality models before intuitive information.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-5 wow fadeInRight" data-wow-duration="1s">
              <div className="tf__about_choose_img">
                <img src="images/why_choose_img.jpg" alt="about us" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;