import React, { useRef } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

import review1 from '../../assets/reviews/review_1.jpg';

const sliders = [
  {
    id: "1",
    img: review1,
  },
  {
    id: "2",
    img: review1,
  },
  // {
  //   id: "3",
  //   img: "bg-[url('./assets/reviews/review_3.jpg')]",
  // },
  // {
  //   id: "4",
  //   img: "bg-[url('./assets/reviews/review_4.jpg')]",
  // },
  // {
  //   id: "5",
  //   img: "bg-[url('./assets/reviews/review_5.jpg')]",
  // },
  // {
  //   id: "6",
  //   img: "bg-[url('./assets/reviews/review_6.jpg')]",
  // },
  // {
  //   id: "7",
  //   img: "bg-[url('./assets/reviews/review_7.jpg')]",
  // },
  // {
  //   id: "8",
  //   img: "bg-[url('./assets/reviews/review_8.jpg')]",
  // },
  // {
  //   id: "9",
  //   img: "bg-[url('./assets/reviews/review_9.jpg')]",
  // },
  // {
  //   id: "10",
  //   img: "bg-[url('./assets/reviews/review_10.jpg')]",
  // },
  // {
  //   id: "11",
  //   img: "bg-[url('./assets/reviews/review_11.jpg')]",
  // },
  // {
  //   id: "12",
  //   img: "bg-[url('./assets/reviews/review_12.jpg')]",
  // },
  // {
  //   id: "13",
  //   img: "bg-[url('./assets/reviews/review_13.jpg')]",
  // },
  // {
  //   id: "14",
  //   img: "bg-[url('./assets/reviews/review_14.jpg')]",
  // },
  // {
  //   id: "15",
  //   img: "bg-[url('./assets/reviews/review_15.jpg')]",
  // },

  // {
  //   id: "16",
  //   img: "bg-[url('./assets/reviews/review_16.jpg')]",
  // },
  // {
  //   id: "17",
  //   img: "bg-[url('./assets/reviews/review_17.jpg')]",
  // },
  // {
  //   id: "18",
  //   img: "bg-[url('./assets/reviews/review_18.jpg')]",
  // },
  // {
  //   id: "19",
  //   img: "bg-[url('./assets/reviews/review_19.jpg')]",
  // },
  // {
  //   id: "20",
  //   img: "bg-[url('./assets/reviews/review_20.jpg')]",
  // },
  // {
  //   id: "21",
  //   img: "bg-[url('./assets/reviews/review_21.jpg')]",
  //   },
  // {
  //   id: "22",
  //   img: "bg-[url('./assets/reviews/review_22.jpeg')]",
  // },
];

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
       
            className={` flex justify-center items-center  bg-cover  rounded-xl`}
          >
            <img className='max-h-[700px] rounded-xl'src={review1} alt="reviews" />
          </SwiperSlide>
          
        ))}
      </Swiper>
    </>
  );
}

export default SwiperPagination;
