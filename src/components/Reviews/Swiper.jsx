import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { IoCaretBackCircle } from "react-icons/io5";
import { IoCaretForwardCircle } from "react-icons/io5";



function SwiperBlock() {

  const swiperRef = useRef();
  return (

    <>
      <Swiper
      className="w-full py-10"
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide className="max-w-[500px] max-h-[500px] flex justify-center ">
          <img className="max-w-[500px] max-h-[500px]" src={test1} alt="poster1" />
        </SwiperSlide>
        <SwiperSlide className="max-w-[500px] max-h-[500px] flex justify-center">
          <img className="max-w-[500px] max-h-[500px]" src={test2} alt="poster3" />
        </SwiperSlide>
        <SwiperSlide className="max-w-[500px] max-h-[500px]] flex justify-center">
          <img className="max-w-[500px] max-h-[500px]" src={test1} alt="poster3" />
        </SwiperSlide>
        <SwiperSlide className="max-w-[500px] max-h-[500px] flex justify-center">
          <img className="max-w-[500px] max-h-[500px]" src={test2} alt="poster3" />
        </SwiperSlide>
      </Swiper>
      <div className="flex w-full justify-between gap-5">
        <button className="bg-btnColor rounded-[10px] shadow-2xl shadow-zinc-950/50 p-2  cursor-pointer " onClick={() => swiperRef.current?.slidePrev()}><IoCaretBackCircle className="w-[30px] h-[30px] "/></button>
        <button className="bg-btnColor rounded-[10px] shadow-2xl shadow-zinc-950/50 p-2 cursor-pointer  " onClick={() => swiperRef.current?.slideNext()}><IoCaretForwardCircle className="w-[30px] h-[30px] "/></button>
      </div>
    </>
  );
}

export default SwiperBlock;
