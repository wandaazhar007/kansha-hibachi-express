const Blog = () => {
  return (
    <section className="tf__blog pt_95 xs_pt_65 pb_65 xs_pb_35">
      <div className="container">
        <div className="row wow fadeInUp" data-wow-duration="1s">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <div className="tf__section_heading mb_25">
              <h4>news & blogs</h4>
              <h2>our latest foods blog</h2>
            </div>
          </div>
        </div>

        <div className="row blog_slider">
          <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1s">
            <div className="tf__single_blog">
              <div className="tf__single_blog_img">
                <img src="images/blog_1.jpg" alt="author" className="img-fluid w-100" />
              </div>
              <div className="tf__single_blog_author">
                <div className="img">
                  <img src="images/client_1.png" alt="author" className="img-fluid w-100" />
                </div>
                <div className="text">
                  <h5>moni islam</h5>
                  <p>14 May 2023</p>
                </div>
              </div>
              <div className="tf__single_blog_text">
                <a className="category" href="#">food</a>
                <a className="title" href="blog_details.html">Operates approximately 400 restaurants</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos, odit beatae
                  sequi
                  tenetur quidem.</p>
                <div className="tf__single_blog_footer">
                  <a className="read_btn" href="blog_details.html">read more <i
                    className="far fa-long-arrow-right"></i></a>
                  <span><i className="far fa-comments"></i> 120</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1s">
            <div className="tf__single_blog">
              <div className="tf__single_blog_img">
                <img src="images/blog_2.jpg" alt="author" className="img-fluid w-100" />
              </div>
              <div className="tf__single_blog_author">
                <div className="img">
                  <img src="images/client_2.png" alt="author" className="img-fluid w-100" />
                </div>
                <div className="text">
                  <h5>john deo</h5>
                  <p>30 Jan 2023</p>
                </div>
              </div>
              <div className="tf__single_blog_text">
                <a className="category" href="#">restaurent</a>
                <a className="title" href="blog_details.html">Introducing Our New Summer Menu!</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos, odit beatae
                  sequi
                  tenetur quidem.</p>
                <div className="tf__single_blog_footer">
                  <a className="read_btn" href="blog_details.html">read more <i
                    className="far fa-long-arrow-right"></i></a>
                  <span><i className="far fa-comments"></i> 120</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1s">
            <div className="tf__single_blog">
              <div className="tf__single_blog_img">
                <img src="images/blog_3.jpg" alt="author" className="img-fluid w-100" />
              </div>
              <div className="tf__single_blog_author">
                <div className="img">
                  <img src="images/client_3.png" alt="author" className="img-fluid w-100" />
                </div>
                <div className="text">
                  <h5>jakia taima</h5>
                  <p>20 Apr 2023</p>
                </div>
              </div>
              <div className="tf__single_blog_text">
                <a className="category" href="#">resort</a>
                <a className="title" href="blog_details.html">Summer Water Rosé + Bubbly Rosé is Here!</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos, odit beatae
                  sequi
                  tenetur quidem.</p>
                <div className="tf__single_blog_footer">
                  <a className="read_btn" href="blog_details.html">read more <i
                    className="far fa-long-arrow-right"></i></a>
                  <span><i className="far fa-comments"></i> 120</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="1s">
            <div className="tf__single_blog">
              <div className="tf__single_blog_img">
                <img src="images/blog_4.jpg" alt="author" className="img-fluid w-100" />
              </div>
              <div className="tf__single_blog_author">
                <div className="img">
                  <img src="images/client_1.png" alt="author" className="img-fluid w-100" />
                </div>
                <div className="text">
                  <h5>israt sultana</h5>
                  <p>21 Mar 2023</p>
                </div>
              </div>
              <div className="tf__single_blog_text">
                <a className="category" href="#">party</a>
                <a className="title" href="blog_details.html">Tender fried baby squid with a salt, pepper</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos, odit beatae
                  sequi
                  tenetur quidem.</p>
                <div className="tf__single_blog_footer">
                  <a className="read_btn" href="blog_details.html">read more <i
                    className="far fa-long-arrow-right"></i></a>
                  <span><i className="far fa-comments"></i> 120</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;