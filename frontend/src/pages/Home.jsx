import Header from "../components/Header/Header";
import BannerSlider from "../components/Banner/BannerSlider";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import AllProducts from "../components/AllProducts/AllProducts";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <FeaturedProducts />
      <Contact />
    </div>
  );
};

export default Home;