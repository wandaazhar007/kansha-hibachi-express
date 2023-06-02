const Reservation = () => {
  return (
    <section className="tf__reservation mt_100 xs_mt_70">
      <div className="container">
        {/* <div className="tf__reservation_bg" style="background: url(images/reservation_bg.jpg);"> */}
        <div className="tf__reservation_bg">
          <div className="row">
            <div className="col-xl-6 ms-auto">
              <div className="tf__reservation_form wow fadeInRight" data-wow-duration="1s">
                <h2>book a table</h2>
                <form>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="tf__reservation_input_single">
                        <label for="name">name</label>
                        <input type="text" id="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="tf__reservation_input_single">
                        <label for="email">email</label>
                        <input type="email" id="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="tf__reservation_input_single">
                        <label for="phone">phone</label>
                        <input type="number" id="phone" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="tf__reservation_input_single">
                        <label for="date">select date</label>
                        <input type="date" id="date" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="tf__reservation_input_single">
                        <label>select time</label>
                        <select className="reservation_input select_js">
                          <option value="">select</option>
                          <option value="">08.00 am to 09.00 am</option>
                          <option value="">10.00 am to 11.00 am</option>
                          <option value="">12.00 pm to 01.00 pm</option>
                          <option value="">02.00 pm to 03.00 pm</option>
                          <option value="">04.00 pm to 05.00 pm</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="tf__reservation_input_single">
                        <label>select person</label>
                        <select className="reservation_input select_js">
                          <option value="">select</option>
                          <option value="">1 person</option>
                          <option value="">2 person</option>
                          <option value="">3 person</option>
                          <option value="">4 person</option>
                          <option value="">5 person</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <button type="submit" className="common_btn">confirm</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;