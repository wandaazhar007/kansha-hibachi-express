'use client'
import { useState, useContext } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const cart = useContext(CartContext);
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [hideTopbar, setHideTopbar] = useState(false);

  const productsCount = cart.items?.reduce((sum, product) => sum + product.quantity, 0);

  const changeTopbar = () => {
    // console.log(window.scrollY);
    // const window = 
    if (window.scrollY >= 10) {
      setHideTopbar(true);
    } else {
      setHideTopbar(false);
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', changeTopbar);
  }
  // window.addEventListener('scroll', changeTopbar);
  const handleShow = () => {
    setShow(!show);
    // alert("test")
  }
  return (
    <nav className={`navbar navbar-expand-lg main_menu ${hideTopbar ? 'menu_fix' : ''} `}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image height={100} width={100} src="/images/logo-kansha-header.png" alt="Kansha Hibachi Express" className="img-fluid" />
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
            {/* <li className="nav-item">
              <Link className={`nav-link ${pathname === '/menu' ? 'active' : ''}`} href="/menu" onClick={() => handleShow()}>menu</Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className={`nav-link ${pathname === '/chefs' ? 'active' : ''}`} href="/chefs" onClick={() => handleShow()}>chefs</Link>
            </li> */}
            <li className="nav-item">
              <Link className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} href="/contact" onClick={() => handleShow()}>contact</Link>
            </li>
          </ul>
          <ul className="menu_icon d-flex flex-wrap">
            <li>
              <Link href="tel:+16604299074" target="_blank" rel="noreferrer"><i className="fas fa-phone"></i></Link>
            </li>
            <li>
              {/* <Link href="#"> */}
              {productsCount > 0 ? (
                <>
                  {/* <FontAwesomeIcon icon={faCartShopping} className="icons" /> {productsCount} */}
                  <Link href="/cart" onClick={(() => handleShow())}>
                    {productsCount}
                  </Link>
                </>
              ) : '0'}
              {/* </Link> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;