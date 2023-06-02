const Topbar = () => {
  return (
    <section className="tf__topbar">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-sm-6 col-md-8">
            <ul className="tf__topbar_info d-flex flex-wrap d-none d-sm-flex">
              <li><a href="mailto:example@gmail.com"><i className="fas fa-envelope"></i> kansha@gmail.com</a>
              </li>
              <li className="d-none d-md-block"><a href="callto:123456789"><i className="fas fa-phone-alt"></i>
                +646-467-1926</a></li>
            </ul>
          </div>
          <div className="col-xl-6 col-sm-6 col-md-4">
            <ul className="topbar_icon d-flex flex-wrap">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a> </li>
              <li><a href="#"><i className="fab fa-twitter"></i></a> </li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a> </li>
              <li><a href="#"><i className="fab fa-behance"></i></a> </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Topbar;