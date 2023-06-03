const FormContact = () => {
  return (
    <section className="tf__contact mt_100 xs_mt_70 mb_100 xs_mb_70">
      <div className="container">
        <div className="tf__contact_form_area">
          <div className="row">
            <div className="col-xl-5 col-md-6 col-lg-5 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__contact_info_area">
                <div className="tf__contact_info">
                  <h3>call</h3>
                  <p>+1347-430-9510</p>
                  <p>+9658745554002</p>
                </div>
                <div className="tf__contact_info">
                  <h3>mail</h3>
                  <p>websolutionus1@gmail.com</p>
                  <p>example@gmail.com</p>
                </div>
                <div className="tf__contact_info border-0 p-0 m-0">
                  <h3>location</h3>
                  <p>7232 Broadway Suite 308, Jackson Heights, 11372, NY, United States</p>
                </div>
              </div>
            </div>

            <div className="col-xl-7 col-md-6 col-lg-7 wow fadeInUp" data-wow-duration="1s">
              <form className="tf__contact_form">
                <h3>contact us</h3>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tf__contact_form_input">
                      <span><i className="fas fa-user"></i></span>
                      <input type="text" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="tf__contact_form_input">
                      <span><i className="fas fa-envelope"></i></span>
                      <input type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="tf__contact_form_input">
                      <span><i className="fas fa-phone-alt"></i></span>
                      <input type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="tf__contact_form_input">
                      <span><i className="fas fa-book"></i></span>
                      <input type="text" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="tf__contact_form_input textarea">
                      <span><i className="fas fa-pen"></i></span>
                      <textarea rows="5" placeholder="Message"></textarea>
                    </div>
                    <button className="common_btn" type="submit">send message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="tf__contact_map_area">
          <div className="row mt_100 xs_mt_70">
            <div className="col-12 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__contact_map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12442.744552741196!2d-93.7368245!3d38.7709022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c3e304e1e59d4d%3A0xd91636cc2fb9e159!2sKansha%20Hibachi%20Express!5e0!3m2!1sen!2sus!4v1685732677839!5m2!1sen!2sus"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormContact;