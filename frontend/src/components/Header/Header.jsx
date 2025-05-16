import logo from "../../assets/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/"><img src={logo} alt="Servicanchas y Piscinas" className={styles.logo} /></a>
      <nav>
        <a href="#productos">Productos destacados</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;