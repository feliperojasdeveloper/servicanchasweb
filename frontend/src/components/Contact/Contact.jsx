import styles from './Contact.module.css';
import contactoImagen from '../../assets/contacto-piscinas.png'

const Contact = () => {
  return (
    <section className={styles.section} id="contacto">
      <h2 className={styles.title}>Contacto</h2>
      <div className={styles.contactContainer}>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Nombre</label>
              <input type="text" id="name" placeholder="Tu nombre completo" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input type="email" id="email" placeholder="tu@email.com" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.formLabel}>Teléfono</label>
              <input type="tel" id="phone" placeholder="+57 311 123 4567" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Mensaje</label>
              <textarea id="message" placeholder="¿En qué podemos ayudarte?" rows="5" required></textarea>
            </div>
            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <img src={contactoImagen} alt="Asesoría profesional para piscinas" className={styles.contactImage}/>
        </div>
      </div>
    </section>
  );
};

export default Contact;