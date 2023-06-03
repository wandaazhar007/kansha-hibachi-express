import Link from "next/link";
import BreadcrumbChefs from "../components/chefs/BreadcrumbChefs";
import Chefs from "../components/chefs/Chefs";
// import Chefs

const ChefPage = () => {
  return (
    <>
      <BreadcrumbChefs />

      <Chefs />
    </>
  );
}

export default ChefPage;