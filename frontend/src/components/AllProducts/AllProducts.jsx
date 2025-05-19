import { useEffect, useState } from "react";
import styles from "./AllProducts.module.css";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [categorySelected, setCategorySelected] = useState('todos');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://servicanchasweb.onrender.com/api/products');
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.log('Error al cargar los productos: ', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const productsFiltered = categorySelected === 'todos' ? products : products.filter(p => p.category === categorySelected);

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Todos los Productos</h2>

            <div className={styles.filtros}>
                <label>Filtrar por categoría:</label>
                <select
                    value={categorySelected}
                    onChange={(e) => setCategorySelected(e.target.value)}
                >
                    <option value="todos">Todos</option>
                    <option value="quimicos">Químicos</option>
                    <option value="accesorios">Accesorios</option>
                    <option value="equipos">Equipos</option>
                </select>
            </div>

            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <div className={styles.grid}>
                    {productsFiltered.map((product) => (
                        <div key={product._id} className={styles.card}>
                            <img src={product.image} alt={product.name} />
                            <div className={styles.cardContent}>
                                <h3>{product.name}</h3>
                                <p className={styles.price}>${product.price.toLocaleString()}</p>
                                <button className={styles.button}>Cotizar</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default AllProducts;