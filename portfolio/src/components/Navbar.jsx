import Link from "next/link";
import Project from "./Projects"

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Portfolio de Melinda
        </Link>
      </div>
      <a href="" className="cta-btn">Resume</a>
      <a href="Project" className="">Projects</a>
    </div>
  )
}

export default Navbar;