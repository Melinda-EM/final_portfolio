import Link from 'next/link';
import Image from 'next/image'
import logo from '../assets/logo-MEM.png'


const Navbar = () => {
  return (
    <div className="nav-container p-4 bg-darkblue text-white flex justify-between items-center">
      <div className="logo">
        <Link href="/" passHref>
            <Image src={logo} alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className="links flex space-x-4">
        <Link href="/home" legacyBehavior>
          <a className="cta-btn">Accueil</a>
        </Link>
        <Link href="/about" legacyBehavior>
          A propos
        </Link>
        <Link href="/skills" legacyBehavior>
          <a>Compétences</a>
        </Link>
        <Link href="/journey" legacyBehavior>
          <a>Parcours</a>
        </Link>
        <Link href="/projects" legacyBehavior>
          <a>Projets</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
