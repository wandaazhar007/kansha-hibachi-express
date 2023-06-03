import Link from "next/link";

const BreadcrumbContact = () => {
  return (
    <>
      {/* <section className="tf__breadcrumb" style="background: url(images/counter_bg.jpg);"> */}
      <section className="tf__breadcrumb" style={{ backgroundImage: "url(" + "/images/breadcrumb_bg.jpg" + ")" }}>
        <div className="tf__breadcrumb_overlay">
          <div className="container">
            <div className="tf__breadcrumb_text">
              <h1>contact with us</h1>
              <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/contact">contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BreadcrumbContact;