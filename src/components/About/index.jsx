import React, { useEffect, useRef, useState } from "react";
import Hero from "./../../assets/AnnaPhoto.jpg";
import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import { useInView } from "react-intersection-observer";
import Modal from "../ui/Modal";
import { linkInsta } from "../utils/variables";

function About() {
  const { t } = useTranslation();
  // const { ref, inView  } = useInView({
  //   threshold: 0.5,
  // });
  
  // const [showModal, setShowModal]=useState(false)
  // useEffect(()=>{
  //   if(inView){
  //     setTimeout(()=>{
  //       setShowModal(true)
  //       document.body.style.overflow='hidden'
  //     },1000)
      
  //   }
  //   else{
  //     setShowModal(false)
  //     document.body.style.overflow='visible'
  //   }
  
  // },[inView])

  return (
    <Container>
      <div className="pb-4">
      <div className="flex flex-col ">
        <a href={linkInsta} target='_blank' className=" relative flex items-center justify-center  ">
          <img src={Hero} alt="hero" className="max-h-[500px] sm:max-h-[600px] rounded-xl" />
        </a>
      </div>
      <h4 className="py-4 text-center text-[18px] sm:text-[20px] md:text-[22px] sm:leading-10 font-medium">
      {t("description.aboutTitle")}
      </h4>
      <div className="flex flex-col gap-3">
      <p className=" text-[14px] sm:text-[16px] md:text-[20px]"> {t("description.abouTextFirst")}</p>
      <p className=" text-[14px] sm:text-[16px] md:text-[20px]"> {t("description.abouTextSecond")}</p>
      <p className=" text-[14px] sm:text-[16px] md:text-[20px]"> {t("description.abouTextTheerd")}</p>
      </div>
   {/* {showModal? <Modal setShowModal={setShowModal} /> :null } */}
      </div>
    </Container>
  );
}

export default About;
