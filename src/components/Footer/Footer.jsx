import React from "react";
import Button from "../ui/Button";
import arrowRight from "./../../assets/arrow-left.svg";
import arrowLeft from "./../../assets/arrow_left.svg";
import { FaInstagram } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import ActiveBlock from '../ui/ActiveBlock'
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-col gap-10 justify-center items-center py-10">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h4>{t("description.FooterTitle")}</h4>
        <FaInstagram className="w-[50px] h-[50px]  " />
        <p className="font-bold">{t("description.AnnName")}</p>
      </div>
      <ActiveBlock/>
      <div>
        <p className=" text-btnColor/40">{t("description.PolisyConf")}</p>
        <p className="text-btnColor/40">{t("description.PublickOffert")}</p>
      </div>
      <div className="text-[14px] text-center text-black/30">
        <span>© 2023 </span>
        <span className=" font-semibold">{t("description.AnnName")}.</span>
        <p>{t("description.coppywritingText")}</p>
      </div>
    </footer>
  );
}

export default Footer;
