import Image from "next/image";

const WhyChooseUs = () => {
  return (
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
              <Image height={100} width={100} src="/images/why_choose_img.jpg" alt="about kansha hibachi express" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;