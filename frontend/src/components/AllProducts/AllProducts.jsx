import { useEffect, useState } from "react";
import styles from "./AllProducts.module.css";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [categorySelected, setCategorySelected] = useState("todos");
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://servicanchasweb.onrender.com/api/products");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.log("Error al cargar los productos: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts =
        categorySelected === "todos"
            ? products
            : products.filter((p) => p.category === categorySelected);

    // Paginar productos filtrados
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className={styles.section}>
            <div className={styles.backContainer}>
                <button onClick={() => navigate('/')} className={styles.backButton}>
                    ← Volver al inicio
                </button>
            </div>
            <div className={styles.contenTitle}>
                <h2 className={styles.title}>Listado de productos</h2>
            </div>

            <div className={styles.filtros}>
                <label>Filtrar por categoría:</label>
                <select
                    value={categorySelected}
                    onChange={(e) => {
                        setCategorySelected(e.target.value);
                        setCurrentPage(1); 
                    }}
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
                <>
                    <div className={styles.grid}>
                        {currentProducts.map((product) => (
                            <div key={product._id} className={styles.card}>
                                <img src={product.image} alt={product.name} />
                                <div className={styles.cardContent}>
                                    <div className={styles.contentName}>
                                        <h3>{product.name}</h3>
                                    </div>
                                    <button className={styles.button}>Cotizar</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Paginación */}
                    <div className={styles.pagination}>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                            <button
                                key={num}
                                onClick={() => changePage(num)}
                                className={`${styles.pageButton} ${currentPage === num ? styles.activePage : ""
                                    }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};

export default AllProducts;
