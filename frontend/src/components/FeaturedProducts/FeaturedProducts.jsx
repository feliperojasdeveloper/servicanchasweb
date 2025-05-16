import styles from './FeaturedProducts.module.css';

const products = [
  {
    id: 1,
    name: "Piscina Rectangular Clásica",
    price: "$8,500,000",
    image: "https://i.imgur.com/JcQ6fYl.png",
    destacado: 1
  },
  {
    id: 2,
    name: "Piscina Rectangular Clásica",
    price: "$8,500,000",
    image: "https://i.imgur.com/JcQ6fYl.png",
    destacado: 1
  },
  {
    id: 3,
    name: "Piscina Rectangular Clásica",
    price: "$8,500,000",
    image: "https://i.imgur.com/JcQ6fYl.png",
    destacado: 1
  },
];

const FeaturedProducts = () => {
  const destacados = products.filter(product => product.destacado === 1);

  return (
    <section className={styles.section} id="productos">
      <h2 className={styles.title}>Productos Destacados</h2>
      <div className={styles.grid}>
        {destacados.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.name} />
            <div className={styles.cardContent}>
              <h3>{product.name}</h3>
              <p className={styles.price}>{product.price}</p>
              <button className={styles.button}>Cotizar</button>
            </div>
          </div>
        ))}
      </div>
      <button className={`${styles.button} ${styles.seeAllButton}`}>
        Ver todos los productos
      </button>
    </section>
  );
};

export default FeaturedProducts;