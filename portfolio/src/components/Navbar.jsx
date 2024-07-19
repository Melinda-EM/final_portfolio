import Link from "next/link";
import Project from "../pages/Projects"

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Portfolio de Melinda
        </Link>
      </div>
      <a href="" className="cta-btn">Resume</a>
      <Link href="/Projects">
        Projects
      </Link>
      
    </div>
  )
}

export default Navbar;