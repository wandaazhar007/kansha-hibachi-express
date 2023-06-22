const ModalProduct = () => {
  return (
    <div className="modal-product">
      <div className="box-container">
        <div className="box">
          <div className="close-btn" onClick={closeModal}></div>
          <div className="modal-body">
            <div className="content-image">
              <Image src={'/images/products/albacore-toro-bintoro-sushi.jpg'} alt="sakura sushi" width={500} height={500} />
            </div>
            <h1 className="title-detail-product">test</h1>
            <p className="desc-detail-product">Albarcore Toro on Sakura specialty sushi rice | 60 Cal</p>
          </div>
          <div className="modal-footer">
            <h1 className="price-detail-product">$3.50 / PCS</h1>
            <button className="add-to-cart" onClick={() => handleClick(productData.id)}>
              <FontAwesomeIcon icon={faCartPlus} className="icon" />
              Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProduct;