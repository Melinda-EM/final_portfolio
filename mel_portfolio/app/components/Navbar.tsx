import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo-MEM.png';

const Navbar = () => {
  return (
    <nav className="nav-container p-4 bg-darkblue text-white fixed w-full top-0 left-0 z-10">
      <div className="logo">
        <Link href="/" legacyBehavior>
          <a>
            <Image src={logo} alt="logo" width={100} height={100} />
          </a>
        </Link>
      </div>
      <div className="links flex space-x-4">
        <Link href="#accueil" legacyBehavior>
          <a>Accueil</a>
        </Link>
        <Link href="#a-propos" legacyBehavior>
          <a>A propos</a>
        </Link>
        <Link href="#competences" legacyBehavior>
          <a>Compétences</a>
        </Link>
        <Link href="#parcours" legacyBehavior>
          <a>Parcours</a>
        </Link>
        <Link href="#projets" legacyBehavior>
          <a>Projets</a>
        </Link>
        <Link href="#contact" legacyBehavior>
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
