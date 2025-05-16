import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.content}>
        <h1 className={styles.banner_title}>Productos Profesionales para Piscinas</h1>
        <p className={styles.banner_subtitle}>Venta de insumos profesionales + Asesoría técnica especializada</p>
        <a href="#contacto" className={styles.cta}>Cotizar Ahora</a>
      </div>
    </section>
  );
};
 
export default Banner;