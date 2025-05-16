import styles from './Footer.module.css';
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p> © 2023 Servicanchas y Piscinas. Todos los derechos reservados.</p>
      <p><FaMapMarkerAlt /> Dirección: Calle 7 # 25-39 - Alameda</p>
      <p><FaPhoneAlt /> Celular: +57 311 628 8797</p>
    </footer>
  );
};

export default Footer;