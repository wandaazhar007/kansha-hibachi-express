import Link from "next/link";

const BreadcrumbChefs = () => {
  return (
    <>
      {/* <section className="tf__breadcrumb" style="background: url(images/counter_bg.jpg);"> */}
      <section className="tf__breadcrumb" style={{ backgroundImage: "url(" + "/images/breadcrumb_bg.jpg" + ")" }}>
        <div className="tf__breadcrumb_overlay">
          <div className="container">
            <div className="tf__breadcrumb_text">
              <h1>Meet Our Expert Chefs</h1>
              <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/chef">chefs</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BreadcrumbChefs;