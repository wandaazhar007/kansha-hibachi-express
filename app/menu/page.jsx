import './menu.scss';
import BoxMenu from '../components/menu/BoxMenu';
import SearchMenu from '../components/menu/SearchMenu';

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