import { useEffect, useState } from 'react';
import styles from './FeaturedProducts.module.css';
import { useNavigate } from 'react-router-dom';


const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/products');
  }

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch('https://servicanchasweb.onrender.com/api/products/destacados');
        if (!response.ok) throw new Error('Error al obtener los productos destacados');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedProducts();
  }, []);
  if (loading) return <p className={styles.loading}>Cargando productos...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <section className={styles.section} id="productos">
      <h2 className={styles.title}>Productos Destacados</h2>
      <div className={styles.grid}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className={styles.card}>
              <img src={product.image} alt={product.name} />
              <div className={styles.cardContent}>
                <h3>{product.name}</h3>
                <button className={styles.button}>Cotizar</button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos destacados.</p>
        )}
      </div>
      <button onClick={handleClick} className={`${styles.button} ${styles.seeAllButton}`}>
        Ver todos los productos
      </button>
    </section>
  );
};

export default FeaturedProducts;