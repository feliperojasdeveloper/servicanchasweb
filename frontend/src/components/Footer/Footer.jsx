import styles from './Footer.module.css';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p> © 2025 Servicanchas y Piscinas. Todos los derechos reservados.</p>
      <p><FaMapMarkerAlt /> Dirección: Calle 7 # 25-39 - Alameda</p>
      <p><FaPhoneAlt /> Celular: +57 311 628 8797</p>
      <p><FaClock /> Lunes a Viernes: 6:00am a 4:30pm - Sabados: 6:00am a 12:00m</p>
    </footer>
  );
};

export default Footer;