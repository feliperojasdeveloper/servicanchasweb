import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
  const handleClickOutside = (e) => {
    if (menuOpen && !e.target.closest(`.${styles.mobileNav}`) && 
        !e.target.closest(`.${styles.menuButton}`)) {
      setMenuOpen(false);
    }
  };

  document.addEventListener('click', handleClickOutside);
  return () => document.removeEventListener('click', handleClickOutside);
}, [menuOpen]);

  return (
    <header className={styles.header}>
      <a href="/"><img src={logo} alt="Logo" className={styles.logo} /></a>
      
      {isMobile ? (
        <>
          <button className={`${styles.menuButton} ${menuOpen ? styles.open : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`${styles.mobileNav} ${menuOpen ? styles.show : ''}`}>
            <a href="#productos" onClick={() => setMenuOpen(false)}>Productos</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
          </nav>
        </>
      ) : (
        <nav className={styles.desktopNav}>
          <a href="#productos">Productos destacados</a>
          <a href="#contacto">Contacto</a>
        </nav>
      )}
    </header>
  );
};

export default Header;