import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './go-to-menu.scss';
import Link from 'next/link';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const GoToMenu = () => {
  return (
    <section className="goToMenu">
      <div className="container">

        <div className="boxContainer">
          <div className="bg-menu">
            <Image src="/images/bg-menu.png" width={300} height={100} alt="kansha hibachi" />
          </div>
          <div className="bgImage">
            <Image src="/images/tree_5.png" width={200} height={200} alt="Kansha Hibachi Express" className="bgImage" />
          </div>
          <div className="bgImage2">
            <Image src="/images/tree_5.png" width={200} height={200} alt="Kansha Hibachi Express" className="bgImage" />
          </div>
          <Link href="/menu">
            <button>Go To Our Menu <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='icon' /></button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GoToMenu;