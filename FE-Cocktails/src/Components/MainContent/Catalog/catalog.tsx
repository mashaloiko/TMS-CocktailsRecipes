import { Link } from "react-router-dom";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style/catalog.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import negroni from '../../../Assets/negroni.jpg';
import daiquiri from '../../../Assets/daiquiri.jpg';
import drymartini from '../../../Assets/drymartini.jpg';
import longisland from '../../../Assets/longisland.jpg';
import margarita from '../../../Assets/margarita.jpg';
import mojito from '../../../Assets/mojito.jpg';
import oldfashioned from '../../../Assets/oldfashioned.jpg';
import whiskey from '../../../Assets/whiskey.jpg';
import pinkmood from '../../../Assets/pinkmood.jpg';

export const Catalog = () => {
  const letters = [
  "a", "b", "c", 
  "d", "e", "f", 
  "g", "h", "i", 
  "j", "k", "l", 
  "m", "n", "o", 
  "p", "q", "r", 
  "s", "t", "u", 
  "v", "w", "x", 
  "y", "z" 
  ];
  const breakpoints = {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    500: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  };


  return (
    <div className="catalog">
      <div className="catalog__container">
        <h2 className="catalog__title">Catalog</h2>
        <div className="catalog__wrap">
          {letters.map((item:string) => (
            <Link key={item} to={`/catalog/${item}`} className="catalog__link">{item} /</Link>
          ))}
        </div>
      </div>
      <div className="swiper">
          <h2 className="swiper__title">Popular drinks</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={breakpoints}
          >
            <SwiperSlide>
              <Link className="swiper__wrap" to={"/catalog/n/11003"}>
                <img className="swiper__img" src={negroni} alt="negroni" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="swiper__wrap" to={"/catalog/d/11006"}>
                <img className="swiper__img" src={daiquiri} alt="daiquiri" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="swiper__wrap" to={"/catalog/d/11005"}>
                <img className="swiper__img" src={drymartini} alt="drymartini" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="swiper__wrap" to={"/catalog/l/11002"}>
                <img className="swiper__img" src={longisland} alt="longisland" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="swiper__wrap" to={"/catalog/m/11007"}>
                <img className="swiper__img" src={margarita} alt="margarita" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="swiper__wrap" to={"/catalog/m/11000"}>
                <img className="swiper__img" src={mojito} alt="mojito" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="swiper__wrap" to={"/catalog/o/11001"}>
                <img className="swiper__img" src={oldfashioned} alt="oldfashioned" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="swiper__wrap" to={"/catalog/w/11004"}>
                <img className="swiper__img" src={whiskey} alt="whiskey" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="swiper__wrap" to={"/catalog/p/178354"}>
                <img className="swiper__img" src={pinkmood} alt="pinkmood" />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}