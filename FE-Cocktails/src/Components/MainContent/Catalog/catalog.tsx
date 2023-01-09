import { Link, NavLink } from "react-router-dom";
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

  return (
    <div className="catalog">
      <div className="catalog__container">
        <h2 className="catalog__title">Catalog</h2>
        <div className="catalog__wrap">
          <NavLink key="a" to={`/catalog/a`} className="catalog__link">A </NavLink>
          <span>/ </span>
          <NavLink key="b" to={`/catalog/b`} className="catalog__link">B </NavLink>
          <span>/ </span>
          <NavLink key="c" to={`/catalog/c`} className="catalog__link">C </NavLink>
          <span>/ </span>
          <NavLink key="d" to={`/catalog/d`} className="catalog__link">D </NavLink>
          <span>/ </span>
          <NavLink key="e" to={`/catalog/e`} className="catalog__link">E </NavLink>
          <span>/ </span>
          <NavLink key="f" to={`/catalog/f`} className="catalog__link">F </NavLink>
          <span>/ </span>
          <NavLink key="g" to={`/catalog/g`} className="catalog__link">G </NavLink>
          <span>/ </span>
          <NavLink key="h" to={`/catalog/h`} className="catalog__link">H </NavLink>
          <span>/ </span>
          <NavLink key="i" to={`/catalog/i`} className="catalog__link">I </NavLink>
          <span>/ </span>
          <NavLink key="j" to={`/catalog/j`} className="catalog__link">J </NavLink>
          <span>/ </span>
          <NavLink key="k" to={`/catalog/k`} className="catalog__link">K </NavLink>
          <span>/ </span>
          <NavLink key="l" to={`/catalog/l`} className="catalog__link">L </NavLink>
          <span>/ </span>
          <NavLink key="m" to={`/catalog/m`} className="catalog__link">M </NavLink>
          <span>/ </span>
          <NavLink key="n" to={`/catalog/n`} className="catalog__link">N </NavLink>
          <span>/ </span>
          <NavLink key="o" to={`/catalog/o`} className="catalog__link">O </NavLink>
          <span>/ </span>
          <NavLink key="p" to={`/catalog/p`} className="catalog__link">P </NavLink>
          <span>/ </span>
          <NavLink key="q" to={`/catalog/q`} className="catalog__link">q </NavLink>
          <span>/ </span>
          <NavLink key="r" to={`/catalog/r`} className="catalog__link">r </NavLink>
          <span>/ </span>
          <NavLink key="s" to={`/catalog/s`} className="catalog__link">s </NavLink>
          <span>/ </span>
          <NavLink key="t" to={`/catalog/t`} className="catalog__link">t </NavLink>
          <span>/ </span>
          <NavLink key="u" to={`/catalog/u`} className="catalog__link">u </NavLink>
          <span>/ </span>
          <NavLink key="v" to={`/catalog/v`} className="catalog__link">v </NavLink>
          <span>/ </span>
          <NavLink key="w" to={`/catalog/w`} className="catalog__link">w </NavLink>
          <span>/ </span>
          <NavLink key="x" to={`/catalog/x`} className="catalog__link">x </NavLink>
          <span>/ </span>
          <NavLink key="y" to={`/catalog/y`} className="catalog__link">y </NavLink>
          <span>/ </span>
          <NavLink key="z" to={`/catalog/z`} className="catalog__link">z </NavLink>
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
            breakpoints={{
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
            }}
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