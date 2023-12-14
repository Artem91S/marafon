import React from "react";
import Hero from "./../../assets/main.jpg";
import { useTranslation } from "react-i18next";
import Container from "../ui/Container";


function About() {
  const { t } = useTranslation();
  return (
    <Container
    title={t("description.aboutTitle")}
    >
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
    </Container>
  );
}

export default About;
