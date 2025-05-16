import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <FeaturedProducts />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;