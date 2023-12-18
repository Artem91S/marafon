import React, { useRef } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import { sliders } from "./PostersList";

function SwiperPagination() {
  const swiperRef = useRef();
  return (
    <>
      <Swiper
        modules={[Pagination]}
        className="w-full py-10"
        slidesPerView={1}
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
            <img className='max-h-[700px] rounded-xl'src={item.img} alt="reviews" />
          </SwiperSlide>
          
        ))}
      </Swiper>
    </>
  );
}

export default SwiperPagination;
