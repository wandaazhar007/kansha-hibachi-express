import './menu.scss';
import BoxMenu from '../components/menu/box-menu/BoxMenu';
import SearchMenu from '../components/menu/search-menu/SearchMenu';

export const metadata = {
  title: 'Menu Kansha Hibachi Express',
  description: 'Explore the exquisite menu of Kansha Hibachi Express. Indulge in a diverse selection of authentic hibachi dishes, flavorful sushi rolls, and savory appetizers. Immerse yourself in a culinary journey that celebrates taste, artistry, and the joy of savoring every bite.',
}

const MenuPage = () => {
  return (
    <section className="menuPage">
      <div className="container">
        <SearchMenu />
        <h1 className="header">All Our Menu</h1>
        <BoxMenu />
      </div>
    </section>
  );
}

export default MenuPage;