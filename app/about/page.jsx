import Link from "next/link";
import BreadcrumbAbout from "../components/about/Breadcrumb";
import About from "../components/about/About";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Counter from "../components/home/Counter";
import Testimonial from "../components/home/Testimonial";
import ContactSection from "../components/home/contactSection/ContactSection";
import WhyChooseUs2 from "../components/about/WhyChooseUs2";
export const metadata = {
  title: 'About Kansha Hibachi Express',
  description: 'Discover the heart and soul of Kansha Hibachi Express. Immerse yourself in the world of authentic hibachi cuisine, sizzling grills, and warm hospitality. Join our culinary journey and experience the joy of Kansha – where every dish is a celebration of flavor and culture.',
}
const AboutPage = () => {
  return (
    <>
      <BreadcrumbAbout />
      <About />
      <WhyChooseUs2 />
      <ContactSection />
    </>
  );
}

export default AboutPage;