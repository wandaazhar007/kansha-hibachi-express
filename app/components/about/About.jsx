import Image from "next/image";

const About = () => {
  return (
    <section className="tf__about_us mt_100 xs_mt_70">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-duration="1s">
            {/* <div className="tf__about_us_img">
              <div className="img">
                <Image width={100} height={100} src="/images/about_chef.jpg" alt="kansha hibachi express" className="img-fluid w-100" />
              </div>
              <h3>12+ <span>Years experience</span></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis architecto
                reiciendis.
                <span>jhon deo</span>
              </p>
            </div> */}
            <div className="about-img">
              <div className="primary-img">
                <Image width={100} height={100} src="/images/about_chef.jpg" alt="kansha hibachi express" />
              </div>
              <div className="experience">
                <h1>12</h1>
                <p>Years Experiences</p>
              </div>
              <div className="quote">
                <div className="quote-desc">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quos. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="quote-name">
                  <p>Krisdiyanto</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-duration="1s">
            <div className="tf__section_heading mb_25">
              <h4>About Company</h4>
              <h2>Healthy Foods Provider</h2>
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
  );
}

export default About;