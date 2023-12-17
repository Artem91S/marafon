import React, { useEffect, useRef, useState } from "react";
import Hero from "./../../assets/AnnaPhoto.jpg";
import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import { useInView } from "react-intersection-observer";
import Modal from "../ui/Modal";


function About() {
  const { t } = useTranslation();
  const { ref, inView  } = useInView({
    threshold: 0.5,
  });
  
  const [showModal, setShowModal]=useState(false)
  useEffect(()=>{
    if(inView){
      setTimeout(()=>{
        setShowModal(true)
        document.body.style.overflow='hidden'
      },1000)
      
    }
    else{
      setShowModal(false)
      document.body.style.overflow='visible'
    }
  
  },[inView])

  return (
    <Container

    title={t("description.aboutTitle")}
    >
      <div ref={ref} >
      <div className="flex flex-col">
        <div className=" relative flex items-center justify-center  ">
          <img src={Hero} alt="hero" className="max-h-[500px]" />
        </div>
      </div>
      <h4 className="py-4 text-[18px]">
      {t("description.aboutSubTitle")}
      </h4>
      <div className="flex flex-col gap-3">
      <p className=" text-[14px]"> {t("description.abouTextFirst")}</p>
      <p className=" text-[14px]"> {t("description.abouTextSecond")}</p>
      <p className=" text-[14px]"> {t("description.abouTextTheerd")}</p>
      <p className=" text-[14px]"> {t("description.abouTextFourth")}</p>
      </div>
   {showModal? <Modal setShowModal={setShowModal} /> :null }
      </div>
    </Container>
  );
}

export default About;
