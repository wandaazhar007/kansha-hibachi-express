const Topbar = () => {
  return (
    <section className="tf__topbar">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-sm-6 col-md-8">
            <ul className="tf__topbar_info d-flex flex-wrap d-none d-sm-flex">
              <li><a href="mailto:example@gmail.com"><i className="fas fa-envelope"></i> ss.kansha@gmail.com</a>
              </li>
              <li className="d-none d-md-block"><a href="tel:+16604299074"><i className="fas fa-phone-alt"></i>
                (660) 429-9074</a></li>
            </ul>
          </div>
          <div className="col-xl-6 col-sm-6 col-md-4">
            <ul className="topbar_icon d-flex flex-wrap">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a> </li>
              <li><a href="#"><i className="fab fa-instagram"></i></a> </li>
              <li><a href="#"><i className="fab fa-google"></i></a> </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Topbar;