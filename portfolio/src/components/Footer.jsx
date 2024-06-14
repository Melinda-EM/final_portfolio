const Footer = () => {
    return (
      <>
        <hr/>
        <div className="flex justify-around items-center p-2 bg-[#1D1E20]">
          <p className="text-sm text-[#9B9C9D]">
            © {new Date().getFullYear()} Portfolio de Melinda
          </p>
          <div className="flex justify-between items-center gap-2">
            <a
              href="https://github.com/melinda.em"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/melinda-em"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer;