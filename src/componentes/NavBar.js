import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";

function NavBar() {
  const navRef = useRef();
  const showNavar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3>Taller M&A</h3>
      <nav ref={navRef}>
        <a href="/#">Inicio</a>
        <a href="/#">Servicios</a>
        <a href="/#">Nuestras Sedes</a>
        <a href="/#">Blog</a>
        <a href="/#">Nosotros</a>
        <a href="/#">Contacto</a>
        <button className="nav-btn nav-close-btn" onClick={showNavar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
