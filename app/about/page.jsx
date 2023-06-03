import Link from "next/link";
import BreadcrumbAbout from "../components/about/Breadcrumb";
import About from "../components/about/About";
import WhyChooseUs from "../components/about/WhyChooseUs";

const AboutPage = () => {
  return (
    <>
      <BreadcrumbAbout />
      <About />



      <WhyChooseUs />
    </>
  );
}

export default AboutPage;