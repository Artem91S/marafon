import React, { useRef } from "react";
import {  Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import 'swiper/css/pagination';
import reviews3 from "../../assets/reviews/second/reviews3.png";
import reviews4 from "../../assets/reviews/second/reviews4.png";
import reviews7 from "../../assets/reviews/second/reviews7.png";
import reviews8 from "../../assets/reviews/second/reviews8.png";
import { IoCaretBackCircle } from "react-icons/io5";
import { IoCaretForwardCircle } from "react-icons/io5";
import test1 from '../../assets/testing1.jpeg'
import test2 from '../../assets/testing2.jpeg'

function SwiperPagination() {

  const swiperRef = useRef();
  return (

    <>
      <Swiper
        modules={[Pagination]}
        // pagination={{ clickable: true }}
      className="w-full py-10"
        slidesPerView={1}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide className="  flex justify-center ">
          <img className=" rounded-xl" src={test1} alt="poster1" />
        </SwiperSlide>
        <SwiperSlide className="max-w-[500px] max-h-[500px] flex justify-center">
          <img className="max-w-[500px] max-h-[500px] rounded-xl" src={test2} alt="poster3" />
        </SwiperSlide>
        <SwiperSlide className="max-w-[500px] max-h-[500px] flex justify-center">
          <img className="max-w-[500px] max-h-[500px] rounded-xl" src={test1} alt="poster3" />
        </SwiperSlide>
        <SwiperSlide className="max-w-[500px] max-h-[500px] flex justify-center">
          <img className="max-w-[500px] max-h-[500px] rounded-xl" src={test2} alt="poster3" />
        </SwiperSlide>
      </Swiper>
      {/* <div className="flex w-full justify-between gap-5">
        <button className="bg-btnColor rounded-[10px] shadow-2xl shadow-zinc-950/50 p-2  cursor-pointer " onClick={() => swiperRef.current?.slidePrev()}><IoCaretBackCircle className="w-[30px] h-[30px] "/></button>
        <button className="bg-btnColor rounded-[10px] shadow-2xl shadow-zinc-950/50 p-2 cursor-pointer  " onClick={() => swiperRef.current?.slideNext()}><IoCaretForwardCircle className="w-[30px] h-[30px] "/></button>
      </div> */}
    </>
  );
}

export default SwiperPagination;
