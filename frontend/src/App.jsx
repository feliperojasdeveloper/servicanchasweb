import Header from "./components/Header/Header"
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import BannerSlider from "./components/Banner/BannerSlider";

function App() {
  return (
    <div className="app">
      <Header />
      <BannerSlider />
      <FeaturedProducts />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;