import Header from "../components/Header/Header";
import BannerSlider from "../components/Banner/BannerSlider";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <BannerSlider />
      <FeaturedProducts />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;