'use client'
import Image from "next/image";
import Link from "next/link";
import { faEye, faHeart, faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {

  const [menus, setMenus] = useState([]);

  const getMenu = async () => {
    const response = await axios.get('http://localhost:3000/api/products');
    setMenus(response.data);
  }

  useEffect(() => {
    getMenu();
  }, [])

  const testDesc = 'test ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, fugit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam ad saepe libero vel amet nesciunt iste eum fugit nostrum.'
  return (
    <section className="products">
      <div className="container">
        <div className="box-container">
          <div className="header">
            <h1 className="title">
              <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
              <span>Our Menu</span>
            </h1>
            <div className="btn-menu-group">
              <button className="btn-menu active">Hibachi</button>
              <button className="btn-menu">Roll</button>
              <button className="btn-menu">Appetizer</button>
              <button className="btn-menu">Side Order</button>
            </div>
          </div>
          <div className="content">
            {menus.map((menu, index) => (
              <Link href={`/menu/${menu.title}`}>
                <div className="box" key={index}>
                  <div className="box-images">
                    <Image height={100} width={100} src={menu.image} alt={menu.name} />
                  </div>
                  <div className="box-contents">
                    <h1 className="title">{menu.name}</h1>
                    <p className="price">${menu.price}</p>
                    <div className="footer-products">
                      <div className="desc">
                        <p>{menu.desc}</p>
                      </div>
                      <div className="btn-cart"><div className="add-cart"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

          </div>

          <div className="link-menu">
            <Link href={'/menu'}>
              <button className="btn-view-product"> <FontAwesomeIcon icon={faEye} className="icon" /> View All Menu</button>
            </Link>
          </div>

        </div>
      </div>
    </section >
  );
}

export default Menu;