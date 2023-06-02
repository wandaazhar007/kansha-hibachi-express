import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg main_menu">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src="images/logo-kansha-header.png" alt="RegFood" className="img-fluid" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="far fa-bars menu_icon_bar"></i>
          <i className="far fa-times close_icon_close"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">about</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="menu.html">menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="chefs.html">chefs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">pages <i className="far fa-angle-down"></i></a>
              <ul className="droap_menu">
                <li><a href="menu_details.html">menu details</a></li>
                <li><a href="blog_details.html">blog details</a></li>
                <li><a href="cart_view.html">cart view</a></li>
                <li><a href="check_out.html">checkout</a></li>
                <li><a href="payment.html">payment</a></li>
                <li><a href="testimonial.html">testimonial</a></li>
                <li><a href="404.html">404/Error</a></li>
                <li><a href="faq.html">FAQs</a></li>
                <li><a href="sign_in.html">sign in</a></li>
                <li><a href="sign_up.html">sign up</a></li>
                <li><a href="forgot_password.html">forgot password</a></li>
                <li><a href="privacy_policy.html">privacy policy</a></li>
                <li><a href="terms_condition.html">terms and condition</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blogs.html">blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">contact</a>
            </li>
          </ul>
          <ul className="menu_icon d-flex flex-wrap">
            <li>
              <a className="cart_icon" href="cart_view.html"><i className="fas fa-shopping-basket"></i>
                <span>05</span></a>
            </li>
            <li>
              <a href="dashboard.html"><i className="fas fa-user"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;