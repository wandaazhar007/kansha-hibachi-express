'use client'
import Image from "next/image";
import Link from "next/link";
import { faArrowAltCircleRight, faEye, faHeart, faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import ModalProduct from "./ModalProduct";

const Menu = () => {
  const [openModal, setOpenModal] = useState(false);
  const [propSlug, setPropSlug] = useState('')
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(3);
  const [pages, setPages] = useState(0);
  const [keywordButton, setKeywordButton] = useState("");
  const [keywordSearch, setKeywordSearch] = useState("");
  const [msg, setMsg] = useState("");
  const [rows, setRows] = useState(0);
  const [query, setQuery] = useState('');
  const [menus, setMenus] = useState([]);

  const getMenu = async () => {
    // const response = await axios.get(process.env.NEXT_PUBLIC_URL_PRODUCTS + '?search_query=' + keywordButton + '&page=' + page + '&limit=' + limit);
    // const responseSearch = await axios.get(`${process.env.NEXT_PUBLIC_URL_PRODUCTS}?search_query=${keywordButton}&page=${page}&limit=${limit}`);
    const response = await axios.get(`http://localhost:2000/products?search_query=${keywordButton}&page=${page}&limit=${limit}`);

    setMenus(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  }

  const getSearch = async () => {
    // const responseSearch = await axios.get(`${process.env.NEXT_PUBLIC_URL_PRODUCTS_SEARCH}?search_query=${keywordSearch}&page=${page}&limit=${limit}`);
    const responseSearch = await axios.get(`http://localhost:2000/search-products?search_query=${keywordSearch}&page=${page}&limit${limit}`);
    setMenus(responseSearch.data.result);
    setPage(responseSearch.data.page);
    setPages(responseSearch.data.totalPage);
    setRows(responseSearch.data.totalRows);
  }

  const changePage = ({ selected }) => {
    setPage(selected);
    if (selected === 9) {
      setMsg(
        "Please search by specific keyword..."
      );
    } else {
      setMsg("");
    }
  };

  const handleClickMenu = (id) => {
    setPage(0)
    setKeywordButton(id);
    setKeywordSearch('')
  }

  const handleSearch = (e) => {
    setKeywordSearch(e.target.value)
    setPage(0)
  }

  const handleModal = (slug) => {
    setOpenModal(true);
    setPropSlug(slug)
  }

  useEffect(() => {
    getMenu();
  }, []);

  useEffect(() => {
    getMenu();
  }, [page, keywordButton]);

  useEffect(() => {
    getSearch();
  }, [page, keywordSearch]);

  // const testDesc = 'test ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, fugit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam ad saepe libero vel amet nesciunt iste eum fugit nostrum.'
  return (
    <>
      <section className="products">
        <div className="container">
          <div className="box-container">
            <div className="header">
              <h1 className="title">
                <FontAwesomeIcon icon={faSquareCaretRight} className="icon" />
                <span>Our Menu</span>
              </h1>
              <div className="btn-menu-group">
                <button className={`btn-menu ${keywordButton === 1 ? 'active' : ''}`} onClick={() => handleClickMenu(1)}>Hibachi</button>
                <button className={`btn-menu ${keywordButton === 2 ? 'active' : ''}`} onClick={() => handleClickMenu(2)}>Roll</button>
                <button className={`btn-menu ${keywordButton === 3 ? 'active' : ''}`} onClick={() => handleClickMenu(3)}>Appetizer</button>
                <button className={`btn-menu ${keywordButton === 4 ? 'active' : ''}`} onClick={() => handleClickMenu(4)}>Side Order</button>
                <button className={`btn-menu ${keywordButton === '' ? 'active' : ''}`} onClick={() => handleClickMenu('')}>All Menu</button>
              </div>
            </div>
            <div className="search-menu">
              {/* <input type="text" className="search" placeholder="Search here..." onChange={handleChange} /> */}
              <input type="text" className="search" placeholder="Search here..." onChange={handleSearch} value={keywordSearch} />
              {/* <p>test</p> */}
              <p>{keywordSearch}</p>
            </div>

            <div className="content">
              {menus.map((menu, index) => (
                <>
                  {/* <Link href={`/menu/${menu.slug}`} key={index}> */}
                  <div className="box" onClick={() => handleModal(menu.slug)}>
                    {/* <div className="box"> */}
                    <div className="box-images">
                      <Image height={100} width={100} src={menu.urlImage} alt={menu.name} />
                    </div>
                    <div className="box-contents">
                      <h1 className="title" key={menu.id}>{menu.name}</h1>
                      <p className="price">${menu.price}</p>
                      <div className="footer-products">
                        <div className="desc">
                          <p>{menu.desc}</p>
                          {/* <p>{}</p> */}
                        </div>
                        <div className="btn-cart"><div className="add-cart"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <ModalProduct openModal={openModalProduct} closeModal={() => setOpenModalProduct(false)} id={menu.id} key={index} name={menu.name} slug={'gyoza'} /> */}
                  {/* </Link> */}
                </>
              ))}
            </div>
            <p className="total-row">Total {keywordButton === 1 ? 'Hibachi' : '' || keywordButton === 2 ? 'Roll' : '' || keywordButton === 3 ? 'Appetizer' : '' || keywordButton === 4 ? 'Side Order' : '' || keywordButton === '' ? 'All Menu' : '' || keywordButton === 'search' ? 'search' : ''} {rows} Page: {rows ? page + 1 : 0} of {pages}</p>
            <div className="pagination">
              <div className="box-container">
                <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={">"}
                  pageCount={Math.min(10, pages)}
                  onPageChange={changePage}
                  containerClassName={"pagination box-container"}
                  pageLinkClassName={"link"}
                  previousLinkClassName={"link"}
                  nextLinkClassName={"link"}
                  activeLinkClassName={"link active"}
                  disabledLinkClassName={"disabled"}
                />
              </div>
            </div>

            <div className="link-menu">
              <Link href={'/menu'}>
                <button className="btn-view-product"> <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" /> View All Menu</button>
              </Link>
            </div>

          </div>
        </div>
      </section >

      <ModalProduct openModal={openModal} closeModal={() => setOpenModal(false)} propSlug={propSlug} />


    </>
  );
}

export default Menu;