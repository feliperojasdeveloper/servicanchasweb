import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <FeaturedProducts />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;