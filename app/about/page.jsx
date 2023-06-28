import Link from "next/link";
import BreadcrumbAbout from "../components/about/Breadcrumb";
import About from "../components/about/About";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Counter from "../components/home/Counter";
import Testimonial from "../components/home/Testimonial";

const AboutPage = () => {
  // new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <BreadcrumbAbout />
      <About />
      <WhyChooseUs />
      <Counter />
      {/* <Testimonial /> */}
    </>
  );
}

export default AboutPage;