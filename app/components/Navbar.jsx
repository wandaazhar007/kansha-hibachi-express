'use client'
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [hideTopbar, setHideTopbar] = useState(false);

  const changeTopbar = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 10) {
      setHideTopbar(true);
    } else {
      setHideTopbar(false);
    }
  }
  window.addEventListener('scroll', changeTopbar);
  const handleShow = () => {
    setShow(!show);
    // alert("test")
  }
  return (
    <nav className={`navbar navbar-expand-lg main_menu ${hideTopbar ? 'menu_fix' : ''} `}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img src="images/logo-kansha-header.png" alt="RegFood" className="img-fluid" />
        </Link>
        <button className={`navbar-toggler ${show ? 'show' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="far fa-bars menu_icon_bar" onClick={() => handleShow()}></i>
          <i className="far fa-times close_icon_close" onClick={() => handleShow()}></i>
        </button>
        <div className={`collapse navbar-collapse ${show ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} aria-current="page" href="/" onClick={() => handleShow()}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/about' ? 'active' : ''}`} href="/about" onClick={() => handleShow()}>about</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/menu' ? 'active' : ''}`} href="/menu" onClick={() => handleShow()}>menu</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/chefs' ? 'active' : ''}`} href="/chefs" onClick={() => handleShow()}>chefs</Link>
            </li>

            {/* <li className="nav-item">
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
            </li> */}

            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} href="/contact" onClick={() => handleShow()}>contact</Link>
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