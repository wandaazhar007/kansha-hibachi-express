'use client'
import Image from "next/image";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import ModalProduct from "./ModalProduct";
import { motion } from "framer-motion";

const Menu = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [propSlug, setPropSlug] = useState('')
  const [propId, setPropId] = useState('');
  const [propName, setPropName] = useState('');
  const [propPrice, setPropPrice] = useState(0);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(4);
  const [pages, setPages] = useState(0);
  const [keywordButton, setKeywordButton] = useState("");
  const [keywordSearch, setKeywordSearch] = useState("");
  const [msg, setMsg] = useState("");
  const [rows, setRows] = useState(0);
  const [query, setQuery] = useState('');
  const [menus, setMenus] = useState([]);

  const getSearch = async () => {
    // const responseSearch = await axios.get(`${process.env.NEXT_PUBLIC_URL_PRODUCTS_SEARCH}?search_query=${keywordSearch}&page=${page}&limit=${limit}`);
    // const responseSearch = await axios.get(`https://kanshaapi.birojasa-sahabat.com/search-products?search_query=${keywordSearch}&page=${page}&limit=${limit}`);
    const responseSearch = await axios.get(`http://localhost:2000/search-products?search_query=${keywordSearch}&page=${page}&limit=${limit}`);
    setTimeout(() => {
      setMenus(responseSearch.data.result);
      setPage(responseSearch.data.page);
      setPages(responseSearch.data.totalPage);
      setRows(responseSearch.data.totalRows);
      setIsLoading(false)
    }, 1000)
  }

  const getMenu = async () => {
    // const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_PRODUCTS}?search_query=${keywordButton}&page=${page}&limit=${limit}`);
    // const response = await axios.get(`https://kanshaapi.birojasa-sahabat.com/products?search_query=${keywordButton}&page=${page}&limit=${limit}`);
    const response = await axios.get(`http://localhost:2000/products?search_query=${keywordButton}&page=${page}&limit=${limit}`);
    setMenus(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
    setIsLoading(false)
  }



  const changePage = ({ selected }) => {
    setIsLoading(true)
    setTimeout(() => {
      setPage(selected);
    }, 1000)
    if (selected === 9) {
      setMsg(
        "Please search by specific keyword..."
      );
    } else {
      setMsg("");
    }
  };



  const handleClickMenu = (id) => {
    setTimeout(() => {
      setPage(0)
      setKeywordButton(id)
      setKeywordSearch('')
    }, 1000)
    setIsLoading(true)
  }

  const handleSearch = (e) => {
    setKeywordSearch(e.target.value)
    setPage(0)
    setIsLoading(true)
  }

  const handleModal = (slug, id, name, price) => {
    setOpenModal(true);
    setPropSlug(slug);
    setPropId(id);
    setPropName(name);
    setPropPrice(price);
  }

  useEffect(() => {
    getSearch();
  }, [keywordSearch]);

  useEffect(() => {
    getMenu();
  }, [page, keywordButton]);


  return (
    <>
      <section className="products">
        <div className="container">
          <div className="box-container">
            <div className="header">
              <h1 className="title">
                {/* <FontAwesomeIcon icon={faSquareCaretRight} className="icon" /> */}
                <span>Menu Kansha</span>
              </h1>
              <motion.div
                initial={{ opacity: 0, x: +200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="btn-menu-group">
                <button className={`btn-menu ${keywordButton === 1 ? 'active' : ''}`} onClick={() => handleClickMenu(1)}>Hibachi</button>
                <button className={`btn-menu ${keywordButton === 2 ? 'active' : ''}`} onClick={() => handleClickMenu(2)}>Roll</button>
                <button className={`btn-menu ${keywordButton === 3 ? 'active' : ''}`} onClick={() => handleClickMenu(3)}>Appetizer</button>
                <button className={`btn-menu ${keywordButton === 4 ? 'active' : ''}`} onClick={() => handleClickMenu(4)}>Side Order</button>
                <button className={`btn-menu ${keywordButton === '' ? 'active' : ''}`} onClick={() => handleClickMenu('')}>All Menu</button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 1, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="search-menu">
              <input type="text" className="search" placeholder="Search here..." onChange={handleSearch} value={keywordSearch} />
              <p>{keywordSearch}</p>
            </motion.div>

            {/* {isLoading && <p style={{ textAlign: 'center' }}>Loading..</p>} */}
            {isLoading &&
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="content">
                {menus.map((menu, index) => (
                  <div className="box" key={menu.id}>
                    <div className="skeleton box-images-skeleton">
                      {/* <Image height={100} width={100} src={menu.urlImage} alt={menu.name} className="skeleton skeleton-image" /> */}
                    </div>
                    <div className="box-contents">
                      <h1 className="title skeleton skeleton-text-title"></h1>
                      <p className="price skeleton skeleton-text-price"></p>
                      <div className="footer-products">
                        <div className="desc skeleton skeleton-text-desc"></div>
                        <div className="desc skeleton skeleton-text-desc"></div>
                        <div className="btn-cart"><div className="add-cart"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            }
            {!isLoading &&
              <div className="content">
                {menus.map((menu, index) => (
                  <>
                    <div className="box" key={menu.id} onClick={() => handleModal(menu.slug, menu.id, menu.name, parseFloat(menu.price))}>
                      <div className="box-images">
                        <Image height={300} width={300} src={menu.urlImage} alt={menu.name} />
                      </div>
                      <div className="box-contents">
                        <h1 className="title" >{menu.name}</h1>
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
                  </>
                ))}
              </div>
            }
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

          </div>
        </div>
      </section >

      <ModalProduct openModal={openModal} closeModal={() => setOpenModal(false)} propId={propId} propName={propName} propPrice={propPrice} />


    </>
  );
}

export default Menu;