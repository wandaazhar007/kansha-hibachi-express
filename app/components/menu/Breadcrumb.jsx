import Link from "next/link";

const BreadcrumbMenu = () => {
  return (
    <>
      {/* <section className="tf__breadcrumb" style="background: url(images/counter_bg.jpg);"> */}
      <section className="tf__breadcrumb" style={{ backgroundImage: "url(" + "/images/breadcrumb_bg.jpg" + ")" }} >
        <div className="tf__breadcrumb_overlay">
          <div className="container">
            <div className="tf__breadcrumb_text">
              <h1>Popular Foods menu</h1>
              <ul>
                <li><Link href="/">home</Link></li>
                <li><Link href="/menu">menu</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BreadcrumbMenu;