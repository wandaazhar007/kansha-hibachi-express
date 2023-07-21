const Counter = () => {
  return (
    <section className="tf__counter" style={{ backgroundImage: "url(" + "/images/counter_bg.jpg" + ")", marginTop: '80px' }}>
      <div className="tf__counter_overlay pt_120 xs_pt_90 pb_100 xs_pb_0">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-sm-6 col-lg-6 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__single_counter">
                <div className="text">
                  <h2 className="counter">2.500</h2>
                  <span><i className="fas fa-users"></i></span>
                </div>
                <p>customer serve</p>
              </div>
            </div>
            <div className="col-xl-6 col-sm-6 col-lg-6 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__single_counter">
                <div className="text">
                  <h2 className="chef">5</h2>
                  <span><i className="fas fa-chess-rook"></i></span>
                </div>
                <p>experience chef</p>
              </div>
            </div>
            {/* <div className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__single_counter">
                <div className="text">
                  <h2 className="counter">72,000</h2>
                  <span><i className="fas fa-users"></i></span>
                </div>
                <p>happy customer</p>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-3 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__single_counter">
                <div className="text">
                  <h2 className="counter">30</h2>
                  <span><i className="fas fa-trophy"></i></span>
                </div>
                <p>winning award</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;