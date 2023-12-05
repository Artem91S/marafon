import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import poster1 from "./../../assets/reviews/reveiw_1.png"
import poster2 from "./../../assets/reviews/reveiw_2.png";
import poster3 from "./../../assets/reviews/reveiw_3.png";
import poster4 from "./../../assets/reviews/reveiw_4.png";
import { IoCaretBackCircle } from "react-icons/io5";
import { IoCaretForwardCircle } from "react-icons/io5";



function SwiperBlock() {

  const swiperRef = useRef();
  return (

    <>
      <Swiper
      className="w-full  py-10"
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide className="w-[350px] flex justify-center ">
          <img className="w-[350px]" src={poster1} alt="poster1" />
        </SwiperSlide>
        <SwiperSlide className="w-[300px] flex justify-center">
          <img className="w-[300px]" src={poster2} alt="poster3" />
        </SwiperSlide>
        <SwiperSlide className="w-[300px] flex justify-center">
          <img className="w-[300px]" src={poster3} alt="poster3" />
        </SwiperSlide>
        <SwiperSlide className="w-[300px] flex justify-center">
          <img className="w-[300px]" src={poster4} alt="poster3" />
        </SwiperSlide>
      </Swiper>
      <div className="flex w-full justify-center gap-5">
        <button className="bg-btnColor rounded-[10px] shadow-2xl shadow-zinc-950/50 p-3  cursor-pointer " onClick={() => swiperRef.current?.slidePrev()}><IoCaretBackCircle className="w-[30px] h-[30px] "/></button>
        <button className="bg-btnColor rounded-[10px] shadow-2xl shadow-zinc-950/50 p-3 cursor-pointer  " onClick={() => swiperRef.current?.slideNext()}><IoCaretForwardCircle className="w-[30px] h-[30px] "/></button>
      </div>
    </>
  );
}

export default SwiperBlock;
