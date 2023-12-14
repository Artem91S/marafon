import React from "react";
import Hero from "./../../assets/main.jpg";

import { FaInstagram } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <section className="mx-6">
      <h3 className="text-[20px]">{t("description.aboutTitle")}</h3>
      <div className="flex flex-col">
        <div className=" relative flex items-center justify-center  ">
          <img src={Hero} alt="hero" className="max-h-[500px]" />
        </div>
      </div>
      <h4>
      {t("description.aboutSubTitle")}
      </h4>
      <div className="flex flex-col gap-3">
      <p className=" text-[14px]"> {t("description.abouTextFirst")}</p>
      <p className=" text-[14px]"> {t("description.abouTextSecond")}</p>
      <p className=" text-[14px]"> {t("description.abouTextTheerd")}</p>
      <p className=" text-[14px]"> {t("description.abouTextFourth")}</p>
      </div>
    </section>
  );
}

export default About;
