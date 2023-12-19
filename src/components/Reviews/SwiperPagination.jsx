import React, { useRef } from "react";
import { useMediaQuery } from 'react-responsive'
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import { sliders } from "./PostersList";

function SwiperPagination() {
  const swiperRef = useRef();
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
  return (
    <>
      <Swiper
        modules={[Pagination]}
        className="max-w-[320px] py-10 sm:max-w-[620px] md:max-w-[720px] lg:max-w-[900px]"
        slidesPerView={isMediumScreen ? isBigScreen ? 2: 1.3 :1}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {sliders.map((item) => (
          <SwiperSlide
            key={item.img}
            className={`flex  justify-center mb-10`}
          >
            <img className='max-h-[800px] lg:max-h-[750px] rounded-xl'src={item.img} alt="reviews" />
          </SwiperSlide>
          
        ))}
      </Swiper>
    </>
  );
}

export default SwiperPagination;
