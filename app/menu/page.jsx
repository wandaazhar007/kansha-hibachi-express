import Link from "next/link";
import BreadcrumbMenu from "../components/menu/Breadcrumb";
import Products from "../components/menu/Products";

const MenuPage = () => {
  return (
    <>

      <BreadcrumbMenu />
      <Products />
    </>
  );
}

export default MenuPage;