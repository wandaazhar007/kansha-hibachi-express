import Link from "next/link";
import BreadcrumbContact from "../components/contact/BreadcrumbContact";
import FormContact from "../components/contact/FormContact";

const ContactPage = () => {
  return (
    <>
      <BreadcrumbContact />

      <FormContact />
    </>
  );
}

export default ContactPage;