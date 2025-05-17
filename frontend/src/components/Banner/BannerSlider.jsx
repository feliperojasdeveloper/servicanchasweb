import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './BannerSlider.module.css';

const banners = [
  {
    id: 1,
    title: "Productos Profesionales para Piscinas",
    subtitle: "Químicos y accesorios de la más alta calidad",
    image: "/banner-principal-1.png",
    ctaText: "Ver catálogo",
    ctaLink: "#productos"
  },
  {
    id: 2,
    title: "Asesoría Especializada",
    subtitle: "Expertos en mantenimiento de piscinas",
    image: "/banner-principal.jpg",
    ctaText: "Contactar",
    ctaLink: "#contacto"
  },
  {
    id: 3,
    title: "Ofertas Exclusivas",
    subtitle: "Descuentos en kits de mantenimiento",
    image: "/banner-productos.jpg",
    ctaText: "Ver ofertas",
    ctaLink: "#productos"
  }
];

const BannerSlider = () => {
  return (
    <section className={styles.sliderContainer}>
      <Swiper 
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiper}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div 
              className={styles.slide}
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className={styles.content}>
                <h2>{banner.title}</h2>
                <p>{banner.subtitle}</p>
                <a href={banner.ctaLink} className={styles.ctaButton}>
                  {banner.ctaText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSlider;