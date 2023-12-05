import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import poster1 from "./../../assets/reviews/reveiw_1.png";
import poster2 from "./../../assets/reviews/reveiw_2.png";
import poster3 from "./../../assets/reviews/reveiw_3.png";
import poster4 from "./../../assets/reviews/reveiw_4.png";
import SwiperBlock from "./Swiper";

// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// const reviews = [
//   {
//     id: 1,
//   },
// ];

function Reviews() {
  // const navigationPrevRef = React.useRef(null)
  // const navigationNextRef = React.useRef(null)
  const swiperRef = useRef();
  return (
    <section className="flex flex-col items-center  py-6 bg-gray-400/5">
      <h3 className="text-[24px]">Відгуки учасників</h3>
      <SwiperBlock/>
      </section>
  );
}

export default Reviews;
