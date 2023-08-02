import Image from 'next/image';
import './menu.scss';
import BoxMenu from '../components/menu/BoxMenu';
import Menu from '../components/home/menu/Menu';
import SearchMenu from '../components/menu/SearchMenu';

const MenuPage = () => {
  return (
    <section className="menuPage">
      <div className="container">
        {/* <Menu /> */}
        <SearchMenu />
        <h1 className="header">All Our Menu</h1>
        <BoxMenu />
      </div>
    </section>
  );
}

export default MenuPage;